<template>
  <div>
    <div class="login-panel">
      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch ref="elform">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><calendar /></el-icon>
              <span>账号密码登录</span>
            </span>
          </template>
          <user :ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane
          ><template #label>
            <span class="custom-tabs-label">
              <el-icon><calendar /></el-icon>
              <span>手机账号登录</span>
            </span>
          </template>
          <user
        /></el-tab-pane>
      </el-tabs>
      <div class="account-control">
        <el-checkbox v-model="isKeep">记住密码</el-checkbox>
        <el-button type="primary">忘记密码</el-button>
      </div>
      <div>
        <el-button type="primary" @click="handleClick">立即登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import user from "./login/user.vue";
import phone from "./login/phone.vue";

export default defineComponent({
  components: {
    user,
    phone,
  },
  setup() {
    const isKeep = ref(true);
    const accountRef = ref<InstanceType<typeof user>>();
    const handleClick = () => {
      console.log(accountRef.value.login());
    };

    return { isKeep, accountRef, handleClick };
  },
});
</script>

<style scoped>
.login-panel {
  width: 320px;
}
.title {
  text-align: center;
}
.account-control {
  display: flex;
  justify-content: space-between;
}
</style>
