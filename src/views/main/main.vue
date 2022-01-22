<template>
  <div class="layout">
    <el-container class="layout-wrap">
      <el-aside :style="{ width: isCollpase ? '64px' : '210px' }">
        <nav-menu :collpase="isCollpase" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/index'

export default defineComponent({
  // name: 'main',
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollpase = ref(false)

    const handleFoldChange = (isFold: boolean) => {
      isCollpase.value = isFold
    }
    return {
      isCollpase,
      handleFoldChange
    }
  }
})
</script>
<style scoped lang="less">
.layout {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.layout-wrap {
  height: 100%;
}

.page-header {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: -1px 2px 7px 5px rgba(0, 0, 0, 0.16);
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001c38;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f6fa;
}
</style>
