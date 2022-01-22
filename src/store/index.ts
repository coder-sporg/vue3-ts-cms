import { createStore, Store, useStore as useVuexStore } from 'vuex'

import { IRootState, StoreType } from './types'

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

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store
