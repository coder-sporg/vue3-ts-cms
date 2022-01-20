import { createStore } from 'vuex'

import { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'xys',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export const setupStore = () => {
  store.dispatch('login/loadLocalLogin')
}

export default store
