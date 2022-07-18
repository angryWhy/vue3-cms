<template>
  <div>
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="account.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="mima">
        <el-input v-model="account.mima" />
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const account = reactive({
      phone: "",
      mima: "",
    });
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
    return { account, rules };
  },
});
</script>

<style scoped>
</style>