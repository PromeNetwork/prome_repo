import 'babel-polyfill';
import 'core-js/stable';

// import 'amfe-flexible';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/icons';

import './utils/winEvent';
import './utils/viewport';

// import { WOW } from "wowjs";

import SvgIcon from '@/components/tool/SvgIcon';

// 判断是否是pc设备
// const isPc = () => {
//   const userAgentInfo = navigator.userAgent;
//   const Agents = [
//     'Android',
//     'iPhone',
//     'SymbianOS',
//     'Windows Phone',
//     'iPad',
//     'iPod',
//   ];
//   let flag = true;
//   for (let v = 0; v < Agents.length; v++) {
//     if (userAgentInfo.indexOf(Agents[v]) > 0) {
//       flag = false;
//       break;
//     }
//   }
//   return flag;
// };

import './styles/index.less';

import 'animate.css';
import 'animate.css/animate.compat.css';

const app = createApp(App);

app.component('svg-icon', SvgIcon);
//如果不是生产环境并且不是pc设备那么就显示调试
// if (process.env.VUE_APP_FLAG === 'test') {
//   console.log(isPc());
//     const vConsole = new VConsole();
//     app.use(vConsole);
// }
app.use(store).use(router).mount('#app');
