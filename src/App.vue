<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Login from "./views/login-index.vue";
export default defineComponent({
  name: "",
  components: {
    Login,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>