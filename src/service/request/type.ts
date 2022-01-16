import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface YSRequsetInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface YSRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: YSRequsetInterceptors<T>
  showLoading?: boolean
}
