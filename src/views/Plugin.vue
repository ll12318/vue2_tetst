<template>
  <div>
    <el-button @click="showLoading">切换loading</el-button>
  </div>
</template>

<script setup lang="ts">

import {getCurrentInstance,ComponentInternalInstance} from "vue";

const {appContext:{config:{globalProperties : global}}}  = getCurrentInstance() as ComponentInternalInstance

const showLoading = () => {
  console.log(global)
  global?.myLoading.show()
  setTimeout(()=>global?.myLoading.hide(),3000)

}
</script>

<style lang="scss" scoped></style>
