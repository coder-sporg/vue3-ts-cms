<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="activeTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号密码登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机验证登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="login-control">
      <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link :underline="false">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  name: 'login-panel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const activeTab = ref('account')

    const isKeepPwd = ref(true)

    const handleLogin = () => {
      if (activeTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPwd.value)
      } else {
        phoneRef.value?.loginAction()
      }
    }

    return {
      accountRef,
      phoneRef,
      activeTab,
      isKeepPwd,

      handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
.login-panel {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  text-align: center;

  .title {
    color: #333;
  }

  .login-control {
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .login-btn {
    margin-top: 8px;
  }
}
</style>
