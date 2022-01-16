import { createApp, App } from 'vue'
import rootApp from './App.vue'

import { globalRegister } from './global'

import router from './router/index'
import store from './store/index'

const app: App = createApp(rootApp)

// 注册element-plus
// globalRegister(app)

app.use(router).use(store).use(globalRegister).mount('#app')
