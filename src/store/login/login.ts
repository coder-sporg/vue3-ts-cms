import { Module } from 'vuex'
import router from '@/router'

import { mapMenusToRoutes } from '@/utils/map-menus'

import { ILoginState } from './types'
import { IRootState } from '../types'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/index'

import localCache from '@/utils/cache'

// Module 两个类型 state, 根store的类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 动态添加路由
      const routes = mapMenusToRoutes(userMenus)

      // 将路由映射到router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      // 登录操作
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data

      commit('changeToken', token)

      // 保存token
      localCache.setCache('token', token)

      // 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data

      commit('changeUserInfo', userInfo)

      localCache.setCache('userInfo', userInfo)

      // 请求用户菜单(角色id)
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data

      commit('changeUserMenus', userMenus)

      localCache.setCache('userMenus', userMenus)

      // 跳转首页
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
