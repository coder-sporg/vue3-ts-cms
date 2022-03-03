<template>
  <div class="page-search">
    <custom-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="el-icon-search" size="small"
            >搜索</el-button
          >
          <el-button icon="el-icon-refresh" size="small">重置</el-button>
        </div>
      </template>
    </custom-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CustomForm from '@/base-ui/common-form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    CustomForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      realName: '',
      cellphone: '',
      enable: '',
      createAt: ''
    })

    return {
      formData
    }
  }
})
</script>

<style scoped>
.page-search {
  padding: 16px 0;
}
.header {
  color: #409eff;
}
.handle-btns {
  text-align: right;
  margin: 0 32px 0 0;
}
</style>
