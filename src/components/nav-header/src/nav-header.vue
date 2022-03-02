<template>
  <div class="nav-header">
    <i
      class="trigger"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <div class="nav-wrap">
      <nav-breadcrumb :breadcrumbs="breadcrumbs" />
      <nav-suport />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import NavSuport from './cpns/nav-suport.vue'
import NavBreadcrumb from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    NavSuport,
    NavBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据：[{name: , path: }]
    const store = useStore()
    const route = useRoute()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .trigger {
    font-size: 25px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }

  .nav-wrap {
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
