<template>
  <div style="display: flex;justify-content: center;align-items: center">
    <div class="theme">123</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const aa = ref('#000')
</script>
<style lang="scss" scoped>
$color-theme: v-bind(aa);
.theme{
  width: 500px;
  height: 500px;
  background-color: $color-theme;
}
</style>
