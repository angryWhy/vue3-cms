import { ElButton,ElForm,ElFormItem,ElInput } from "element-plus";
import { App } from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const components = [ElButton];
export function registerApp(app :App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn);
  }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}  