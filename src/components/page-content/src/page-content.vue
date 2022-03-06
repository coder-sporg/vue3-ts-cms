<template>
  <div class="page-content">
    <common-table
      v-bind="tableConfig"
      :tableData="dataList"
      :totalCount="dataCount"
      :page="pageInfo"
    >
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button v-if="operateName" type="primary" size="small">{{
          operateName
        }}</el-button>
      </template>

      <!-- 列表的插槽 -->
      <template #status="scope">
        <el-tag :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-tag>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
    </common-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'

import CommonTable from '@/base-ui/commom-table'

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    operateName: {
      type: String
    },
    tableConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    CommonTable
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      // pageUrl: '/users/list',
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    return {
      dataList,
      dataCount,
      pageInfo
    }
  }
})
</script>

<style scoped>
.page-content {
  border-top: 20px solid #f0f6fa;
  padding: 16px;
}
</style>
