import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import 'element-plus/dist/index.css'
import "@/assets/styles/index.scss"
import 'element-plus/theme-chalk/display.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Message 消息弹框样式
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
// 封装svgicon
import 'virtual:svg-icons-register';
import SvgIcon from '@/components/svg-icon/index.vue';
import '@/assets/iconfont/font.css';
// pinia
import { createPinia } from 'pinia'
// 自定义指令
import directive from './directives'
// md-editor-v3
import { MdEditor }  from 'md-editor-v3'
import 'md-editor-v3/lib/style.css';
// tailwindcss
import '@/styles/tailwind/index.css';
const app = createApp(App);
directive(app);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.component('SvgIcon', SvgIcon);
app.component('MdEditor', MdEditor);
app.use(router).use(createPinia()).mount('#app');

