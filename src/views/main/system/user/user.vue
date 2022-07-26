<template>
  <div class="user">
    <div class="search">
      <BaseForm
        :formItems="forItem"
        :itemStyle="itemStyle"
        v-model:formData="formData"
      >
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <el-button>重置</el-button>
          <el-button type="primary">提交</el-button>
        </template>
      </BaseForm>
      <el-table :data="userList" style="width: 100%">
        <template v-for="propitem in propList" :key="propitem.prop">
          <el-table-column v-bind="propitem" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { IFormItem } from "../../../../base-ui/baseFormType";
import BaseForm from "@/base-ui/baseForm.vue";
import { useStore } from "../../../../store/index";

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
    const store = useStore();
    store.dispatch("systemModule/getPageListAction", {
      pageurl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10,
      },
    });
    const userList = computed(() => store.state.systemModule.userList);

    const userCount = computed(() => store.state.systemModule.userCount);
    const propList = [
      { prop: "name", label: "用户名", minWidth: "100" },
      { prop: "realname", label: "真实姓名", minWidth: "100" },
      { prop: "ceelphone", label: "手机号码", minWidth: "100" },
      { prop: "enable", label: "状态", minWidth: "100" },
      { prop: "createAt", label: "创建时间", minWidth: "250" },
      { prop: "updateAt", label: "更新时间", minWidth: "250" },
    ];
    return {
      forItem,
      itemStyle,
      formData,
      userList,
      userCount,
      propList,
    };
  },
  components: { BaseForm },
});
</script>

<style scoped>
</style>
