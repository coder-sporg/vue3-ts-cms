<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <page-content
      :tableConfig="tableConfig"
      pageName="users"
      operateName="新建用户"
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
  name: 'user',
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
