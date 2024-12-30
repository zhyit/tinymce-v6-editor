(function () {
  //参考地址: https://github.com/dimakorotkov/tinymce-mathjax/blob/master/plugin.js

  const global = window.tinymce.util.Tools.resolve('tinymce.PluginManager')
  const baseURL = '/tinymce/plugins/mathjax/index.html'
  const mathjaxClassName = 'math-tex';
  const mathjaxTempClassName = mathjaxClassName + '-original';
  const mathjaxSymbols = {start: '$', end: '$'};
  const mathjaxConfigUrl = '/tinymce/plugins/mathjax/mathjax-config.js?className=' + mathjaxTempClassName;
  const mathjaxSrc = '/tinymce/plugins/mathjax/es5/tex-mml-svg.js';

  const checkElement = (editor, element) => {
    let latex = element.getAttribute('data-latex') || element.innerHTML;
    element.setAttribute('contenteditable', false);
    element.style.cursor = 'pointer';
    if (latex !== element.innerHTML) {
      element.setAttribute('data-latex', latex);
      element.innerText = latex;
    }
  }

  const setup = editor => {
    editor.on('init', () => {
      const scripts = editor.getDoc().getElementsByTagName('script');
      let found = false;
      for (let j = 0; j < scripts.length; j++) {
        if (scripts[j].src === mathjaxSrc) {
          found = true;
          break;
        }
      }
      if (!found) {
        const script1 = editor.dom.create('script', {type: 'text/javascript', src: mathjaxConfigUrl})
        editor.getDoc().getElementsByTagName('head')[0].appendChild(script1);
        const script = editor.dom.create('script', {
          id: 'MathJax-script',
          type: 'text/javascript',
          src: mathjaxSrc
        })
        editor.getDoc().getElementsByTagName('head')[0].appendChild(script);
      }
    })

    // remove extra tags on get content
    editor.on('GetContent', function (e) {
      let div = editor.dom.create('div');
      div.innerHTML = e.content;
      let elements = div.querySelectorAll('.' + mathjaxClassName);
      for (let i = 0; i < elements.length; i++) {
        /*let children = elements[i].querySelectorAll('span');
        for (let j = 0; j < children.length; j++) {
            children[j].remove();
        }*/
        let latex = elements[i].getAttribute('data-latex');
        // elements[i].removeAttribute('contenteditable');
        // elements[i].removeAttribute('style');
        // elements[i].removeAttribute('data-latex');
        elements[i].innerHTML = latex;
      }
      e.content = div.innerHTML;
    });

    // refresh mathjax on set content
    editor.on('SetContent', function (e) {
      const elements = editor.dom.getRoot().querySelectorAll('.' + mathjaxClassName);
      if (elements.length) {
        for (let i = 0; i < elements.length; i++) {
          checkElement(editor, elements[i]);
        }
        if (editor.getDoc().defaultView.MathJax) {
          if (editor.getDoc().defaultView.MathJax.startup) {
            editor.getDoc().defaultView.MathJax.startup.getComponents();
          }
          // console.log(editor.getDoc().defaultView.MathJax)
          editor.getDoc().defaultView.MathJax.typeset();
        }
      }
    });

    editor.on("click", function (e) {
      let closest = e.target.closest('.' + mathjaxClassName);
      if (closest) {
        openMathjaxEditor(editor, closest);
      }
    });
  }
  const openMathjaxEditor = (editor, target) => {
    let latex = '';
    if (target) {
      const latex_attribute = target.getAttribute('data-latex');
      if (latex_attribute.length >= (mathjaxSymbols.start + mathjaxSymbols.end).length) {
        latex = latex_attribute.substring(mathjaxSymbols.start.length + 1, latex_attribute.length - (mathjaxSymbols.start + mathjaxSymbols.end).length + 1);
      }
    }
    // console.log(latex)

    editor.windowManager.openUrl({
      title: '数学公式',
      size: 'large',
      width: 785,
      height: 750,
      url: latex ? baseURL + '?latex=' + encodeURIComponent(latex) : baseURL,
      buttons: [
        {
          type: 'cancel',
          text: 'Close'
        },
        {
          type: 'custom',
          text: 'Save',
          name: 'save',
          primary: true
        },
      ],
      onAction: (api, details) => {
        switch (details.name) {
          case 'save':
            api.sendMessage("save");
            break;
          default:
            break;
        }
      },
      onClose: () => {
        // 让光标定位到未尾
        editor.selection.select(editor.getBody(), true)
        editor.selection.collapse(false)
      }
    })
  }

  const uiAction = (editor) => {
    const load = () => {
      let selected = editor.selection.getNode();
      let target = undefined;
      if (selected.classList.contains(mathjaxClassName)) {
        target = selected;
      }
      openMathjaxEditor(editor, target);
    }
    return {load}
  }

  const register = editor => {
    editor.ui.registry.addIcon('mathjax', '<svg viewBox="0 0 1210 1024" xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M69.538909 148.48A65.163636 65.163636 0 0 1 115.618909 37.236364H605.090909a55.854545 55.854545 0 0 1 0 111.709091H228.072727L492.450909 413.509818c27.927273 27.927273 29.230545 72.704 2.978909 102.213818L217.460364 828.509091H605.090909a55.854545 55.854545 0 0 1 0 111.709091H113.850182A65.163636 65.163636 0 0 1 65.163636 831.767273l323.584-363.985455-319.301818-319.301818z m642.327273 178.734545a55.854545 55.854545 0 0 1 78.010182 12.288L930.909091 533.410909l141.032727-193.908364a55.854545 55.854545 0 0 1 90.298182 65.722182L999.982545 628.363636l162.257455 223.138909a55.854545 55.854545 0 1 1-90.298182 65.722182L930.909091 723.316364 789.876364 917.224727a55.854545 55.854545 0 1 1-90.298182-65.722182L861.835636 628.363636 699.578182 405.224727a55.854545 55.854545 0 0 1 12.288-78.010182z"></path></svg>')
    editor.ui.registry.addButton('mathjax', {
      icon: 'mathjax',
      tooltip: '数学公式',
      onAction: () => uiAction(editor).load()
    });
    editor.ui.registry.addMenuItem('mathjax', {
      text: '公式',
      onAction: () => uiAction(editor).load()
    });
  }
  const Plugin = () => {
    global.add('mathjax', (editor) => {
      register(editor)
      setup(editor)
    })
  };
  Plugin()
})();
