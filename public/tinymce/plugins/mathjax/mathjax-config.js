(() => {
    let className = 'math-tex';
    MathJax = {
        options: {
            processHtmlClass: className, //可以设置处理class
            ignoreHtmlClass: '.*' //可以设置忽略一些class
        },
        tex: {
            inlineMath: [["$", "$"], ["\\(", "\\)"]],   //行内公式选择符
            displayMath: [["$$", "$$"], ["\\[", "\\]"]],   //段内公式选择符
        }
    };
})()
