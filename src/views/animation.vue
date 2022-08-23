<template>
  <div>
    <el-button @click="show = !show">animation</el-button>
    <div :class="'box animate__animated '+(show ?'': 'animate__bounce')"></div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const show = ref(true)
</script>

<style lang="less" scoped>
.box {
  width: 100px;
  height: 100px;
  background: skyblue;
}
</style>