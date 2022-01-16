import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { YSRequsetInterceptors, YSRequestConfig } from './type'

import { ElLoading } from 'element-plus/lib/components'
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'

const NOT_FOUND = 404
const DEFAULT_LOADING = true

class YSRequest {
  instance: AxiosInstance
  interceptors?: YSRequsetInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: YSRequestConfig) {
    // 创建实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 针对实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('all request')
        if (this.showLoading) {
          ;(this.loading as any) = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading?.close()

        res = res.data

        if (res.data.returnCode === '-1001') {
          console.log('请求失败，错误信息')
        }
        return res
      },
      (err) => {
        // 根据HttpErrorCode显示不同的错误信息
        if ((err.response.status = NOT_FOUND)) {
          console.log('页面找不到!!!')
        }
        return err
      }
    )
  }

  request<T>(config: YSRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的请求拦截处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否展示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance.request<any, T>(config).then(
        (res) => {
          // 单个请求对响应拦截的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 将showLoading设置为true，不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        },
        (err) => {
          // 将showLoading设置为true，不影响下一次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
        }
      )
    })
  }

  get<T>(config: YSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: YSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }

  put<T>(config: YSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PUT' })
  }

  patch<T>(config: YSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }

  delete<T>(config: YSRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default YSRequest
