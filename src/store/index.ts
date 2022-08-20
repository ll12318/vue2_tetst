import {defineStore} from "pinia";
import {Names} from "./store-name";

export const useTestStore = defineStore(Names.TEST, {
    state: () => ({
        current: 1,
        name: 'zs'
    }),
    getters: {},
    actions: {
        setCurrent(num: number) {
            this.current = num
        }
    }
})