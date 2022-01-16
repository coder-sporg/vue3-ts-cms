<template>
  <div class="account">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="verify-code">
          <el-input v-model="code"></el-input>
          <el-button type="primary" class="code">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'login-phone',
  setup() {
    const account = reactive({
      phone: '',
      code: ''
    })

    return {
      ...toRefs(account)
    }
  }
})
</script>
<style lang="less" scoped>
.verify-code {
  display: flex;
  justify-content: space-between;

  .code {
    margin-left: 10px;
  }
}
</style>
