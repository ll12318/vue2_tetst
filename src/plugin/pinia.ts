import {PiniaPluginContext} from "pinia";
import {toRaw} from "vue";

const __piniaKey = '__PINIAKEY__'

type Options = {
    key?: string,
    storeName?: string[]
}

//将数据存在本地
const setStorage = (key: string, value: any): void => {

    localStorage.setItem(key, JSON.stringify(value))

}

//存缓存中读取
const getStorage = (key: string) => {

    return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

export const piniaPersistence = (options: Options) => (contest: PiniaPluginContext) => {
    const {store} = contest
    const data = getStorage(`${options.key ?? __piniaKey}-${store.$id}`)
    store.$subscribe((e) => {
        // console.log(options)

        // 如果穿storeName 就只持久化传的store。 如果不传就持久化所有的store
        if (!options.storeName) {
            setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state));
        } else {
            if (options.storeName?.includes(e.storeId)) {
                setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state));
            }
        }

    })
    return {
        ...data
    }
}
