<template>
  <div class="account">
    <el-form label-width="60px" ref="formRef" :model="account" :rules="rules">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="account.password"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'

import localCache from '@/utils/cache'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'

export default defineComponent({
  name: 'login-account',
  setup() {
    const store = useStore()

    const account = reactive({
      name: localCache.getCache('account')?.name ?? '',
      password: localCache.getCache('account')?.password ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPwd: boolean) => {
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          if (isKeepPwd) {
            localCache.setCache('account', account)
          } else {
            localCache.deleteCache('account')
          }

          // 登录验证
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      loginAction,
      formRef,
      rules
    }
  }
})
</script>
<style lang="less" scoped></style>
