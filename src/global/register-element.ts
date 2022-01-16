import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElButton
} from 'element-plus/lib/components'

const components = [
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElButton
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
