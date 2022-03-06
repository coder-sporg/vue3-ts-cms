<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :tableConfig="tableConfig"
      pageName="role"
      operateName="新建角色"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { tableConfig } from './config/table.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      tableConfig
    }
  }
})
</script>

<style scoped></style>
