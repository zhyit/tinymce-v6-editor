# Vue 3 + Vite + tinymce6

该项目主要是编写tinymce6的插件

已有插件

| 插件               | 名称               | 备注                                                                                           |
|------------------|-----------------------------|----------------------------------------------------------------------------------------------|
| pasteuploadimage | 复制word图片或者html的图片上传 | 需配置images_upload_handler                                                                     |
| formatpainter    | 格式刷                      | 这是网上下载的,如果有更好的请告诉我                                                                           |
| mathjax          | 数学公式                    |                                                                                              |
| textIndex        | 首行缩进                    |                                                                                              |
| letterSpacing    | 字体间距                        |                                                                                              |
| changeSkin       | 更换编辑器皮肤                     | 因为这是用js获取了引入的<link>的ID去更换href,这边测试ID是在没有冲突的情况下进行,如果有,请配置skin_id,如果需要更过的皮肤样式,请配置skin_list([{text:'xxx', href: 'xxx'}]) |