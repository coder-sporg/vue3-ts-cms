import YSRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/utils/cache'

const httpService = new YSRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: false,
  interceptors: {
    requestInterceptor: (config: any) => {
      const token = localCache.getCache('token') ?? ''
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default httpService
