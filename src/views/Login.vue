<template>
  <div>
    <div class="login-panel">
      <h1 class="title">后台管理系统</h1>
      <el-tabs type="border-card" stretch v-model="currentTab">
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon></el-icon>
              <span>账号密码登录</span>
            </span>
          </template>
          <user ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone"><template #label>
            <span class="custom-tabs-label">
              <el-icon></el-icon>
              <span>手机账号登录</span>
            </span>
          </template>
          <phone />
        </el-tab-pane>
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

<script lang="ts">
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
    const currentTab = ref("account")
    const handleClick = () => {
      if (currentTab.value = "account") {
        accountRef.value?.login()
      } else {
        console.log(currentTab.value);
        console.log("phone");
      }
    };

    return { isKeep, accountRef, handleClick, currentTab };
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
