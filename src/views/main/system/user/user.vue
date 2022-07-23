<template>
  <div class="user">
    <div class="search">
      <BaseForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IFormItem } from '../../../../base-ui/baseFormType';
import BaseForm from '@/base-ui/baseForm.vue';

export default defineComponent({
  name: "user",
  setup() {
    const forItem: IFormItem[] = [
      {
        label: "用户名",
        rules: [],
        placeHolder: "请输入用户名",
        type: "input"
      },
      {
        label: "密码",
        rules: [],
        placeHolder: "请输入密码",
        type: "password"
      },
      {
        label: "喜欢的运动",
        rules: [],
        placeHolder: "选择喜欢的运动",
        type: "select"
      },
      {
        label: "创建时间",
        rules: [],
        placeHolder: "请选择创建时间和范围",
        type: "date"
      }
    ];
    return {
      forItem
    };
  },
  components: { BaseForm }
})
</script>

<style scoped>
</style>
