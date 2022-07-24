<template>
  <div class="user">
    <div class="search">
      <BaseForm
        :formItems="forItem"
        :itemStyle="itemStyle"
        v-model:formData="formData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { IFormItem } from "../../../../base-ui/baseFormType";
import BaseForm from "@/base-ui/baseForm.vue";

export default defineComponent({
  name: "user",
  setup() {
    const forItem: IFormItem[] = [
      {
        field: "name",
        label: "用户名",
        rules: [],
        placeHolder: "请输入用户名",
        type: "input",
      },
      {
        field: "password",
        label: "密码",
        rules: [],
        placeHolder: "请输入密码",
        type: "password",
      },
      {
        field: "sport",
        label: "喜欢的运动",
        rules: [],
        placeHolder: "选择喜欢的运动",
        type: "select",
        options: [
          { title: "1", value: "1" },
          { title: "2", value: "2" },
        ],
      },
      {
        field: "createTime",
        label: "创建时间",
        rules: [],
        placeHolder: "请选择创建时间和范围",
        type: "date",
        otherOptions: {
          startPlaceholder: "开始时间",
          endPlaceholder: "结束时间",
          type: "daterange",
        },
      },
    ];
    const itemStyle = {
      padding: "10px 40px",
    };
    const formData = ref({
      name: "",
      password: "",
      sport: "",
      createTime: "",
    });
    return {
      forItem,
      itemStyle,
      formData,
    };
  },
  components: { BaseForm },
});
</script>

<style scoped>
</style>
