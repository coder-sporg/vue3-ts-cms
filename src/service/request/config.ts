let BASE_URL = ''
const TIME_OUT = 10000

// process.env.NODE_ENV
// 开发环境：development
// 生产环境：product
// 测试环境：test
if (process.env.NODE_ENV === 'development') {
  // 测试地址
  // BASE_URL = 'http://123.207.32.32:8000/'
  // BASE_URL = 'http://152.136.185.210:5000'
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'product') {
  BASE_URL = 'http://xxx.org/prod'
} else {
  BASE_URL = 'http://xxx.org/prod'
}

export { BASE_URL, TIME_OUT }
