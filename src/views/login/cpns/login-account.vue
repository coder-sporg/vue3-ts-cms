<template>
  <div class="account">
    <el-form label-width="60px">
      <el-form-item label="账号" prop="user">
        <el-input v-model="user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="pwd"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'login-account',
  setup() {
    const account = reactive({
      user: 'coderwhy',
      pwd: '123456'
    })

    return {
      ...toRefs(account)
    }
  }
})
</script>
<style lang="less" scoped></style>
