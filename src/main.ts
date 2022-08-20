import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Loading from "./components/Loading";
import {createPinia} from "pinia";

// declare module '@vue/runtime-core'{
//     export  interface  ComponentCustomproperties{
//         $loading: {
//             show:()=>void,
//             hide:()=>void
//         }
//     }
// }
createApp(App).use(router).use(createPinia()).use(Loading).use(ElementPlus).mount('#app')
