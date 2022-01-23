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
  ElButton,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElTooltip,
  ElDropdown,
  ElBadge,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar
} from 'element-plus/lib/components'

const components = [
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElButton,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElBadge,
  ElTooltip,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
