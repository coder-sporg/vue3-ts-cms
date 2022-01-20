import { createApp, App } from 'vue'
import rootApp from './App.vue'

import { globalRegister } from './global'

import router from './router/index'
import store from './store/index'

import { setupStore } from './store/index'

import 'normalize.css'
import './assets/css/index.less'

const app: App = createApp(rootApp)

// 注册element-plus
// globalRegister(app)

setupStore()

app.use(router).use(store).use(globalRegister).mount('#app')
