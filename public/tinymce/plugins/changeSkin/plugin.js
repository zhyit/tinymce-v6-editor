(function () {
    const global = window.tinymce.util.Tools.resolve('tinymce.PluginManager');
    const register = editor => {
        //mce-u0、mce-u1 这是在没有跟其它引入冲突是tinymce自己给引入的皮肤css <link> 添加的id,所以请灵活修改
        const skin_css_id = editor.getParam('skin_id', 'mce-u0') //编辑器外观
        const content_skin_css_id = editor.getParam('content_skin_id', 'mce-u0') // 编辑器内容外观
        const content_css_id = editor.getParam('content_css_id', 'mce-u1') // 编辑器内容外观

        const letter_spacing_formats = editor.getParam('skin_list', [
            {text: 'oxide', href: '/tinymce/skins/ui/oxide/skin.min.css', content_href: '/tinymce/skins/content/default/content.min.css'},
            {text: 'oxide-dark', href: '/tinymce/skins/ui/oxide-dark/skin.min.css', content_href: '/tinymce/skins/content/dark/content.min.css'}
        ]);
        editor.ui.registry.addIcon('changeSkin', '<svg viewBox="0 0 1267 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M385.987048 468.443429c0-30.695619-28.099048-46.421333-53.552762-37.936762-8.301714 2.779429-15.872 7.545905-25.07581 14.701714-12.04419 9.350095-27.172571 23.259429-46.396952 42.179048l-6.64381 6.570666c-6.192762 6.15619-20.967619 21.101714-30.134857 30.378667-5.668571-5.936762-12.312381-12.982857-19.919238-21.101714a11957.784381 11957.784381 0 0 1-105.728-115.078096L393.959619 73.142857h60.708571c56.32 80.65219 107.702857 125.098667 159.085715 131.486476 7.972571 0.987429 16.091429 1.487238 24.356571 1.487238v-73.142857c-5.266286 0-10.374095-0.316952-15.335619-0.926476-27.172571-3.388952-68.62019-41.240381-118.369524-115.772952L493.568 0H362.276571C133.607619 243.480381 16.944762 367.88419 12.312381 373.174857c-6.948571 7.94819-9.752381 18.090667-0.877714 27.855238l10.264381 11.312762c199.15581 219.428571 180.297143 199.265524 202.300952 199.265524 9.337905 0 14.384762-2.230857 20.358095-6.034286 1.706667-1.084952 3.169524-2.169905 4.681143-3.413333 1.77981-1.438476 3.657143-3.120762 5.900191-5.217524 3.34019-3.145143 7.594667-7.338667 13.58019-13.372952-2.218667 2.230857 28.038095-28.440381 37.400381-37.753905a1645.141333 1645.141333 0 0 1 6.936381-6.863238v461.446095c0 9.45981 4.156952 14.713905 14.250667 14.713905h311.015619v-73.142857H385.987048V468.443429z"></path><path d="M885.028571 468.443429c0-30.695619 28.111238-46.421333 53.552762-37.936762 8.301714 2.779429 15.872 7.545905 25.088 14.701714 12.04419 9.350095 27.160381 23.259429 46.384762 42.179048 2.157714 2.121143 4.376381 4.303238 6.64381 6.570666 6.204952 6.15619 20.97981 21.101714 30.134857 30.378667a2798.689524 2798.689524 0 0 0 19.919238-21.101714 11957.820952 11957.820952 0 0 0 105.74019-115.078096L877.056 73.142857h-60.708571c-56.32 80.65219-107.690667 125.098667-159.085715 131.486476-7.972571 0.987429-16.091429 1.487238-24.356571 1.487238v-73.142857c5.278476 0 10.386286-0.316952 15.335619-0.926476 27.184762-3.388952 68.632381-41.240381 118.369524-115.772952L777.45981 0h131.291428c230.38781 245.394286 347.599238 370.383238 351.634286 374.954667 6.046476 6.838857 6.424381 18.127238 1.03619 24.07619l-12.080762 13.312c-199.168 219.428571-180.297143 199.265524-202.313142 199.265524-9.325714 0-14.372571-2.230857-20.358096-6.034286-1.706667-1.084952-3.169524-2.169905-4.681143-3.413333a110.08 110.08 0 0 1-5.888-5.217524 586.044952 586.044952 0 0 1-13.58019-13.372952c2.206476 2.230857-28.038095-28.440381-37.400381-37.753905a1645.153524 1645.153524 0 0 0-6.948571-6.863238v462.677333c0 5.546667-5.705143 13.482667-13.653334 13.482667H632.917333v-73.142857h252.135619V468.443429z"></path></svg>')
        editor.ui.registry.addMenuButton('changeSkin', {
            icon: 'changeSkin',
            tooltip: '换肤',
            fetch: (callback) => {
                let lhv = editor.options.get('skin')
                const items = letter_spacing_formats.map((item) => {
                    return {
                        type: 'togglemenuitem',
                        text: item.text,
                        value: item.text,
                        active: lhv === item.text,
                        onAction: () => {
                            //设置编辑器外观皮肤
                            let skin_css = document.querySelector(`head > link[id=${skin_css_id}]`)
                            if (skin_css) {
                                skin_css.href = item.href
                            } else {
                                skin_css = document.createElement('link')
                                skin_css.rel = 'stylesheet'
                                skin_css.type = 'text/css'
                                skin_css.id = skin_css_id
                                skin_css.href = item.href
                                document.head.append(skin_css)
                            }
                            //设置编辑器内容皮肤
                            if (item.content_href) {
                                const content_head = editor.iframeElement.contentDocument.head

                                //content_skin_css 是存在的,但是不知道什么作用,因为只改content_css,编辑器内容外观就改变了
                                let content_skin_css = content_head.querySelector(`link[id=${content_skin_css_id}]`)
                                if (content_skin_css) {
                                    content_skin_css.href = item.href
                                } else {
                                    content_skin_css = document.createElement('link')
                                    content_skin_css.rel = 'stylesheet'
                                    content_skin_css.type = 'text/css'
                                    content_skin_css.id = content_skin_css_id
                                    content_skin_css.href = item.href
                                    content_head.append(content_skin_css)
                                }

                                let content_css = content_head.querySelector(`link[id=${content_css_id}]`)
                                if (content_css) {
                                    content_css.href = item.content_href
                                } else {
                                    content_css = document.createElement('link')
                                    content_css.rel = 'stylesheet'
                                    content_css.type = 'text/css'
                                    content_css.id = content_css_id
                                    content_css.href = item.content_href
                                    content_head.append(content_css)
                                }
                            }
                            editor.options.set('skin', item.text)
                        }
                    }
                })
                callback(items)
            }
        })
    }
    const Plugin = () => {
        global.add('changeSkin', (editor) => {
            register(editor)
        })
    };
    Plugin()
})()