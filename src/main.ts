import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'element-plus/dist/index.css'
import { setupStore } from "./store/index"
const app = createApp(App)
setupStore()
app.use(store)
app.use(router)
app.mount("#app")

