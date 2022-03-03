import httpService from '../index'

import { IAccount, ILoginResult } from './type'
import { IDataType } from '../types'

enum LoginAPI {
  AccountLogin = '/login',
  userInfo = '/users/',
  userMenus = '/role/'
}

export const accountLoginRequest = (account: IAccount) => {
  return httpService.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export const requestUserInfoById = (id: number) => {
  return httpService.get<IDataType>({
    url: LoginAPI.userInfo + id
  })
}

// 菜单树
export const requestUserMenusByRoleId = (id: number) => {
  return httpService.get<IDataType>({
    url: LoginAPI.userMenus + id + '/menu'
  })
}
