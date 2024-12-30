(function () {
    const global = window.tinymce.util.Tools.resolve('tinymce.PluginManager');
    const register = editor => {
        editor.ui.registry.addIcon('textIndent', '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M195.047619 588.897524c0-21.455238 13.945905-38.375619 31.695238-38.375619h570.514286c17.749333 0 31.695238 16.920381 31.695238 38.375619 0 21.504-13.945905 38.375619-31.695238 38.375619H226.742857c-17.749333 0-31.695238-16.871619-31.695238-38.375619z m602.209524 151.990857H226.742857c-17.749333 0-31.695238 16.871619-31.695238 38.326857 0 21.504 13.945905 38.375619 31.695238 38.375619h570.514286c17.749333 0 31.695238-16.871619 31.695238-38.375619 0-21.455238-13.945905-38.326857-31.695238-38.326857z m5.753905-557.202286H500.784762c-14.531048 0-25.990095 16.920381-25.990095 38.375619 0 21.504 11.459048 38.375619 25.990095 38.375619h302.177524c14.531048 0 25.941333-16.871619 25.941333-38.375619 0-19.943619-11.410286-38.375619-25.941333-38.375619z m0 187.245715H500.784762c-14.531048 0-25.990095 16.920381-25.990095 38.375619 0 21.504 11.459048 38.375619 25.990095 38.375619h302.177524c14.531048 0 25.941333-16.871619 25.941333-38.375619 0-21.455238-11.410286-38.326857-25.941333-38.326858zM224.060952 435.736381l155.89181-108.739048a18.627048 18.627048 0 0 0 0-30.866285l-155.89181-108.739048A18.139429 18.139429 0 0 0 195.047619 201.825524V419.352381c0 16.335238 16.335238 23.600762 29.013333 16.335238z"></path></svg>')
        editor.ui.registry.addToggleButton('textIndent', {
            icon: 'textIndent',
            tooltip: '首行缩进',
            onAction: (api) => {
                editor.execCommand('mceToggleFormat', false, 'textIndentFormatter');
            },
            onSetup: (api) => {
                api.setActive(editor.formatter.match('textIndentFormatter'));
                const changed = editor.formatter.formatChanged('textIndentFormatter', (state) => api.setActive(state));
                return () => changed.unbind();
            }
        })
    }
    const Plugin = () => {
        global.add('textIndent', (editor) => {
            register(editor)
            editor.on('init', () => {
                const format = editor.getParam('text_indent_format', '2em')
                // 注册自定义格式
                editor.formatter.register('textIndentFormatter', {
                    selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table',
                    styles: {
                        'text-indent': format
                    }
                })
            })
        })
    };
    Plugin()
})();
