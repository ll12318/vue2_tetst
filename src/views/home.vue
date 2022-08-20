<template>
  <div style="padding: 10px">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
          v-for="(item, index) in routes"
          :key="index"
          :label="(item.name)"
          :name="item.path || 'test'"
      >
      </el-tab-pane>
    </el-tabs>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
import {routes} from "../router/index";
import type {TabsPaneContext} from "element-plus";
import {useRoute, useRouter} from "vue-router";

const activeName: Ref = ref("first");
const router = useRouter();

const handleClick = (tab: TabsPaneContext) => {
  router.push({path: tab.props.name as string});
};
</script>
