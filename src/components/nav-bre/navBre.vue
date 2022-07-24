<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in breadArr" :key="item.title">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    breadArr: {
      type: Array,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>