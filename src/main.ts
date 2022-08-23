import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'animate.css';
import Loading from "./components/Loading";
import {createPinia} from "pinia";
import {piniaPersistence} from "./plugin/pinia";

// declare module '@vue/runtime-core'{
//     export  interface  ComponentCustomproperties{
//         $loading: {
//             show:()=>void,
//             hide:()=>void
//         }
//     }
// }
const pinia = createPinia()
pinia.use(piniaPersistence({
    key: 'wkPinia',
    // 如果穿storeName 就只持久化传的store。 如果不传就持久化所有的store
    storeName: ['TEST']
}))
createApp(App).use(router).use(pinia).use(Loading).use(ElementPlus).mount('#app')
