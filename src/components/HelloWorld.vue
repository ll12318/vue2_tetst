<template>
  <button @click="a = !a">change</button>
  <div v-if="a">{{ msg }}</div>
  <div v-if="a">{{ obj.name }}</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "@vue/runtime-dom";

const a = ref(false);
const obj = reactive<{ name: string }>({ name: "zs" });
type Props = {
  msg: string;
};
defineProps<Props>();
</script>
