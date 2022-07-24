<template>
  <div class="user">
    <div class="search">
      <BaseForm :formItems="forItem" :itemStyle="itemStyle" />
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
        type: "select",
        options: [
          { title: "1", value: "1" },
          { title: "2", value: "2" },
        ]
      },
      {
        label: "创建时间",
        rules: [],
        placeHolder: "请选择创建时间和范围",
        type: "date",
        otherOptions: {
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          type: "daterange"
        }
      }
    ];
    const itemStyle = {
      padding: "10px 40px"
    }
    return {
      forItem,
      itemStyle
    };
  },
  components: { BaseForm }
})
</script>

<style scoped>
</style>
