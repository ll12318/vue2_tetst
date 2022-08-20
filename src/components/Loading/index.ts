import {App, createVNode, render, VNode} from "vue";
import MyLoading from './MyLoading.vue'

export default {
    install(app: App) {
        const vNode: VNode = createVNode(MyLoading)
        render(vNode, document.body)
        app.config.globalProperties.myLoading = {
            show: vNode.component?.exposed?.show,
            hide: vNode.component?.exposed?.hide
        }
        // console.log(MyLoading,'loading')
        // console.log(vNode,'vNode')
        // console.log(app.config.globalProperties.$loading)
        // app.config.globalProperties.$loading.show()
    }
}