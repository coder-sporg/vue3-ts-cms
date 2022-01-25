<template>
  <div class="user">
    <div class="search">
      <custom-form v-bind="searchFormConfig" v-model="formData"></custom-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import CustomForm from '@/base-ui/common-form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    CustomForm
  },
  setup() {
    const formData = reactive({
      id: '',
      name: '',
      realName: '',
      cellphone: '',
      enable: '',
      createAt: ''
    })

    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
