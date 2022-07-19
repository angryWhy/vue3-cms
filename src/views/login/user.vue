<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account" ref="formref">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: "",
      password: "",
    });
    const formref = ref<InstanceType<typeof ElForm>>();
    const login = () => {
      formref.value?.validate((flag) => {
        if (flag) {
          store.dispatch("loginModule/accountLogin", { ...account })
        }

      });
    };
    //编写规则
    const rules = {
      name: [
        { required: true, message: "必须填写", trigger: "blur" },
        { pattern: /^[a-z0-9]{5,10}$/, message: "5-10数字", trigger: "blur" },
      ],
      password: [
        { required: true, message: "密码必须填写", trigger: "blur" },
        { pattern: /^[a-z0-9]{5,10}$/, message: "5-10数字", trigger: "blur" },
      ],
    };
    return { account, rules, login, formref };
  },
});
</script>

<style scoped>
</style>