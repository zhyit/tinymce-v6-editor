<script setup>
import {onMounted, reactive, ref} from "vue";
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver/theme'  // 主题文件
import 'tinymce/models/dom'
import 'tinymce/icons/default/icons' ////解决了icons.js 报错Unexpected token '<'
import 'tinymce/plugins/accordion'
import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/emoticons/js/emojis.js'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/image'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/media'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/quickbars'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/table'
import 'tinymce/plugins/wordcount'
import 'tinymce/skins/ui/oxide/skin.min.css'

const props = defineProps({
  id: {
    type: String,
    default: 'vue-tinymce-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
  },
  height: {
    type: [Number, String],
    default: 500
  },
  width: {
    type: String,
    default: 'auto'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const example_image_upload_handler = (blobInfo, progress) => new Promise(async (resolve, reject) => {
  console.log(blobInfo)
  // let file = blobInfo.blob()
  // if (!file.name) {
  //   file.name = blobInfo.filename()
  // }
})
const setup = (editor) => {

}
const init_instance_callback = (editor) => {
}
const handle_paste_preprocess = (editor, args) => {
  const tem = document.createElement('div')
  tem.innerHTML = args.content.replace(/<v:[\s\S]*?>[\s\S]*?<\/v:[\s\S]*?>/gi, '')
      .replace( /<!--\[if\s[\s\S]*?]>[\s\S]*?<!\[endif]-->/gi, '');
  args.content = tem.innerHTML
}

const init = reactive({
  selector: `#${props.id}`,
  content_style: `p {margin: 0; border:0; padding: 0;}`,
  language_url: '/tinymce/langs/zh_CN.js', // https://www.tiny.cloud/get-tiny/language-packages/
  language: 'zh_CN',
  // ui_mode: 'split',
  // skin_url: '/tinymce/skins/ui/oxide',
  skin: 'oxide',
  content_css: '/tinymce/skins/content/default/content.min.css', ///tinymce/skins/content/document/content.min.css
  height: props.height,  // 如果使用了 autoresize 插件, height设置失效
  promotion: false, //隐藏右上角upgrade按钮
  branding: false, //隐藏右下角由TINY驱动
  menubar: false, // 是否隐藏顶部菜单
  elementpath: false, //隐藏底栏的元素路径（隐藏右下角元素显示）
  // resize: true, // 禁用拖拽调整大小
  toolbar_mode: 'wrap', //'floating''sliding''scrolling''wrap'  https://www.tiny.cloud/docs/tinymce/6/toolbar-configuration-options/
  // contextmenu: false, // false  table image link
  quickbars_insert_toolbar: false, // 使用了 quickbars 的情况下，contextmenu 失效，要使用 quickbars_insert_toolbar
  // contextmenu_never_use_native: false, //为true 右键菜单不出现
  // table_resize_bars: false, // 隐藏表格调整大小的手柄
  // table_resizing: false, // 禁止表格调整大小
  object_resizing: true, //img,//是否允许调整图像大小.
  // font_size_input_default_unit: 'pt', //fontsizeinput fontsize
  toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough " +
      "| align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat " +
      "| charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl " +
      "| restoredraft insertdatetime searchreplace wordcount | subscript superscript | blockquote " +
      "| formatpainter mathjax letterSpacing textIndent changeSkin",
  plugins: 'accordion advlist anchor charmap code codesample directionality emoticons fullscreen image ' +
      'insertdatetime link lists media pagebreak preview quickbars save searchreplace table wordcount',
  image_advtab: true,
  image_caption: true,
  valid_elements: '*[*]', // 允许所有标签和属性
  // paste_webkit_styles: 'none', //此选项允许您指定粘贴到 WebKit 中时要保留的样式 'none' 或者 'all'
  advlist_bullet_styles: 'default,circle,disc,square',
  link_default_target: '_blank',
  link_title: false, //此选项允许您禁用对话框中的链接输入字段
  nonbreaking_force_tab: true, //tab键插入三个&nbsp;
  relative_urls: false,
  convert_urls: false, //设置为false，禁止将编辑器中的图片地址自动转为相对路径
  setup: setup,
  init_instance_callback: init_instance_callback,
  // 添加扩展插件
  external_plugins: {
    pasteuploadimage: '/tinymce/plugins/pasteuploadimage/plugin.min.js',
    mathjax: '/tinymce/plugins/mathjax/plugin.js',
    formatpainter: '/tinymce/plugins/formatpainter/plugin.min.js',
    letterSpacing: '/tinymce/plugins/letterSpacing/plugin.js',
    textIndent: '/tinymce/plugins/textIndent/plugin.js',
    changeSkin: '/tinymce/plugins/changeSkin/plugin.js',
  },
  font_size_formats: '初号=44pt 小初=36pt 一号=26pt 小一=24pt 二号=22pt 小三=18pt 三号=16pt 小四=14pt 四号=12pt 五号=10.5pt 小五=9pt 六号=7.5pt 小六=6.5pt 七号=5.5pt 八号=5pt ' +
      '12pt 13pt 14pt 15pt 16pt 17pt 18pt 19pt 20pt 21pt 22pt 23pt 24pt 25pt 26pt 27pt 28pt 29pt 30pt 31pt 32pt 33pt 34pt 35pt 36pt 48pt 72pt',
  font_family_formats:
      "微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书';幼圆='幼圆';" +
      "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;" +
      "Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;" +
      "Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;" +
      "Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;" +
      "Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;" +
      "Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;" +
      "Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings",
  // images_upload_handler: example_image_upload_handler,
  paste_preprocess: handle_paste_preprocess,
  line_height_formats: '1 1.1 1.2 1.3 1.4 1.5 2 2.5 3'
})

onMounted(() => {
  tinymce.init(init)
})
</script>

<template>
  <textarea :id="id"/>
</template>

<style scoped>

</style>