<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <div class="name">Vue3+TS</div>
    </div>
    <el-menu
      default-active="39"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      unique-opened
      :collapse="collpase"
    >
      <template v-for="menu in userMenus" :key="menu.id">
        <template v-if="menu.type === 1">
          <el-sub-menu :index="menu.id + ''">
            <template #title>
              <i v-if="menu.icon" :class="menu.icon"></i>
              <span>{{ menu.name }}</span>
            </template>
            <template v-for="item in menu.children" :key="item.id">
              <el-menu-item :index="item.id + ''">
                <i v-if="item.icon" :class="item.icon"></i>
                <span>{{ item.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.id + ''">
            <i v-if="menu.icon" :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'

export default defineComponent({
  props: {
    collpase: {
      type: Boolean,
      defaule: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => {
      return store.state.login.userMenus
    })
    return {
      userMenus
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;

  .logo {
    height: 34px;
    padding: 15px 10px 15px 5px;
    display: flex;
    align-items: center;
    background-color: #002140;

    .img {
      display: inline-block;
      height: 100%;
      margin: 0 10px;
    }

    .name {
      margin-left: 15px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .el-menu {
    height: calc(100% - 64px);
    border-right: none;
  }

  .el-sub-menu {
    background-color: #001529 !important;
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0a1a2a !important;
    }
  }

  .el-sub-menu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 64px);
}
</style>
