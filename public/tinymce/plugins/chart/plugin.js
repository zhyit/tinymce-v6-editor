(function () {
    const global = window.tinymce.util.Tools.resolve('tinymce.PluginManager')
    const index_html_url = '/tinymce/plugins/chart/index.html'
    const edit_html_url = '/tinymce/plugins/chart/edit.html'
    const echarts_js_url = '/tinymce/plugins/chart/echarts.min.js'
    const echarts_gl_js_url = '/tinymce/plugins/chart/echarts-gl.min.js'
    const class_name = 'tinymce-chart-item-'
    let edit_node_class

    const assembleChartOption = (el) => {
        let type = el.getAttribute('data-type');
        const name = el.getAttribute('data-name');
        const mode = el.getAttribute('data-mode');
        let list = [
            ['', '系列 1', '系列 2','系列 3'],
            ['类别 1', '4.3', '2.4', '2'],
            ['类别 2', '2.5', '4.4', '2'],
            ['类别 3', '3.5', '1.8', '3'],
            ['类别 4', '4.5', '2.8', '5']
        ]
        const data_list = el.getAttribute('data-list');
        if (data_list) {
            list = JSON.parse(data_list);
        }

        let max;
        let stack;
        let title = name || '图表';
        let xAxisData = [];
        let series = [];
        if (type === 'bar') {
            switch (mode) {
                case '1':
                    break;
                case '2':
                    stack = 'x';
                    break;
                case '3':
                    max = 100;
                    stack = 'x';
                    break;
                case '4':
                    type = type + '3D';
                    break;
                case '5':
                    type = type + '3D';
                    stack = 'x';
                    break;
                case '6':
                    type = type + '3D';
                    max = 100;
                    stack = 'x';
                    break;
                case '7':
                    type = type + '3D';
                    break;
            }
        }

        if (type.includes('3D')) {
            if (list.length > 0) {
                xAxisData = list.slice(1).map(row => row[0]);
                let n = 0;
                for (let i = 1; i < list[0].length; i++) {
                    const item = list[0][i];
                    const series_item = {
                        name: item,
                        type,
                        data: [],
                        stack
                    }
                    for (let j = 1; j < list.length; j++) {
                        if (mode === '4') {
                            series_item.data.push([j - 1, 1, parseFloat(list[j][i])]);
                            n++;
                        } else if (mode === '5' || mode === '6') {
                            series_item.data.push([j - 1, 1, parseFloat(list[j][i])]);
                        } else {
                            series_item.data.push([j - 1, i, parseFloat(list[j][i])]);
                        }
                    }
                    series.push(series_item);
                }
            }
            console.log(series);
            // return

            /*return {
                title: {
                    text: title
                },
                legend: {},
                tooltip: {},
                grid3D: {
                },
                xAxis3D: {
                    type: 'category',
                    data: xAxisData
                },
                yAxis3D: {
                    type: 'category'
                },
                zAxis3D: {
                    type: 'value',
                    max
                },
                series
            };*/
        }

        if (list.length > 0) {
            xAxisData = list.slice(1).map(row => row[0]);

            for (let i = 1; i < list[0].length; i++) {
                const item = list[0][i];
                const series_item = {
                    name: item,
                    type,
                    data: [],
                    stack
                }
                for (let j = 1; j < list.length; j++) {
                    series_item.data.push(list[j][i]);
                }
                series.push(series_item);
            }
        }
        return {
            title: {
                text: title
            },
            tooltip: {},
            legend: {},
            xAxis: {
                type: 'category',
                data: xAxisData
            },
            yAxis: {
                type: 'value',
                max
            },
            series
        };
    }

    const reInit = (editor) => {
        const el = editor.iframeElement.contentDocument.querySelector(`.${edit_node_class}`);
        if (el) {
            // 清除echarts实例标志属性和子标签
            el.removeAttribute('_echarts_instance_')
            el.innerHTML = '';
            el.style = `width:80%;height: 300px;margin: 0 auto;`;
            // 重新初始化实例
            const chart = echarts.init(el);
            chart.setOption(assembleChartOption(el));
        }
    }

    const openChartDataView = (editor) => {
        let iframe_id = editor.iframeElement.id
        editor.windowManager.openUrl({
            title: '编辑图表数据',
            size: 'large',
            width: 785,
            height: 655,
            url: `${edit_html_url}?node_class=${edit_node_class}&iframe_id=${iframe_id}`,
            buttons: [
                {
                    type: 'custom',
                    name: 'push_row',
                    text: '加一行'
                },
                {
                    type: 'custom',
                    name: 'del_row',
                    text: '减一行'
                },
                {
                    type: 'custom',
                    name: 'push_col',
                    text: '加一列'
                },
                {
                    type: 'custom',
                    name: 'del_col',
                    text: '减一列'
                },
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
                if (details.name) {
                    api.sendMessage(details.name);
                }
            },
            onClose: () => {
                // 让光标定位到未尾
                editor.selection.select(editor.getBody(), true);
                editor.selection.collapse(false);
                edit_node_class = '';
            },
            onMessage: (api, message) => {
                const el = editor.iframeElement.contentDocument.querySelector(`.${edit_node_class}`);
                if (el) {
                    el.setAttribute('data-list', message.content);
                    reInit(editor);
                    // 获取已存在的echarts实例
                    // const chart = echarts.getInstanceByDom(el);
                }
            }
        })
    }

    const openChartListView = (editor) => {
        editor.windowManager.openUrl({
            title: '插入图表',
            size: 'large',
            width: 785,
            height: 655,
            url: index_html_url,
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
                edit_node_class = ''
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
                // editor.selection.select(editor.getBody(), true);
                // editor.selection.collapse(false);
                if (edit_node_class) {
                    openChartDataView(editor);
                }
            },
            onMessage: (api, message) => {
                editor.insertContent(message.content);
                const divEl = document.createElement('div');
                divEl.innerHTML = message.content;
                const el_class = divEl.querySelector(`[class^="${class_name}"]`).classList[0];
                divEl.remove();
                edit_node_class = el_class;
                reInit(editor);
            }
        })
    }

    const setup = editor => {
        editor.on('init', () => {
            let echartsScript = document.head.querySelector(`script[id='echarts-script']`);
            if (!echartsScript) {
                echartsScript = document.createElement('script');
                echartsScript.id = 'echarts-script';
                echartsScript.type = 'text/javascript';
                echartsScript.src = echarts_js_url;
                document.head.append(echartsScript);
            }
            // 3D 引入echarts扩展 echarts-gl.js
            /*let echartsGlScript = document.head.querySelector(`script[id='echarts-gl-script']`);
            if (!echartsGlScript) {
                echartsGlScript = document.createElement('script');
                echartsGlScript.id = 'echarts-gl-script';
                echartsGlScript.type = 'text/javascript';
                echartsGlScript.src = echarts_gl_js_url;
                document.head.append(echartsGlScript);
            }*/
        })
        editor.on('GetContent', (e) => {
            const tempEl = editor.dom.create('div');
            tempEl.innerHTML = e.content;
            const elements = tempEl.querySelectorAll(`[class^="${class_name}"]`);
            for (let i = 0; i < elements.length; i++) {
                elements[i].removeAttribute('_echarts_instance_')
                elements[i].innerHTML = '';
            }
            e.content = tempEl.innerHTML;
            tempEl.remove();
        })
        editor.on('SetContent', (e) => {
            const elements = editor.getBody().querySelectorAll(`[class^="${class_name}"]`);
            if (elements.length) {
                elements.forEach(item => {
                    // const chart = echarts.init(item);
                    // chart.setOption(assembleChartOption(item));
                })
            }
        })
    }

    const register = editor => {
        editor.ui.registry.addIcon('chart', '<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"></path><path d="M288 712h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zM440 712h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zM592 712h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zM744 712h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"></path></svg>')
        editor.ui.registry.addButton('chart', {
            icon: 'chart',
            tooltip: '插入图表',
            onAction: () => openChartListView(editor)
        });
        editor.ui.registry.addMenuItem('chart', {
            text: '图表',
            onAction: () => openChartListView(editor)
        });
        // 编辑数据
        editor.ui.registry.addMenuItem('chartDataEdit', {
            text: '编辑数据',
            onAction: () => openChartDataView(editor)
        });
        editor.ui.registry.addContextMenu('chart-data-edit', {
            update: (element) => {
                edit_node_class = ''; // 重置右键选中对象
                // 你可以根据条件来决定是否添加菜单项
                let node = element;
                if (element.nodeName.toLowerCase() === 'canvas') {
                    node = element.parentNode.parentNode;
                }
                if (node.nodeName.toLowerCase() === 'div') {  // 例如，只在段落元素上显示
                    for (let i = 0; i < node.classList.length; i++) {
                        if (node.classList[i].startsWith(class_name)) {
                            edit_node_class = node.classList[i];
                            return ['chartDataEdit'];
                        }
                    }
                }
            }
        })
    }

    const Plugin = () => {
        global.add('chart', (editor) => {
            register(editor)
            setup(editor)
        })
    };

    Plugin()
})();
