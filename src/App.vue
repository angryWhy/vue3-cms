<template>
  <div>
    <Login />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Login from "./views/Login.vue";
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