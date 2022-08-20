<template>
  <div class="loading" v-if="flag">
    <div class="test">loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";

let flag: Ref<boolean> = ref(false);
const show = () => (flag.value = true);
const hide = () => (flag .value = false);
defineExpose({flag,show, hide})
</script>

<style lang="less" scoped>
.loading {
  background-color: #ccc;
  position: absolute;
  opacity: .3;
  top: 0px;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
