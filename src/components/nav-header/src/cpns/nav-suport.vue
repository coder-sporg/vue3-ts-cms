<template>
  <div class="nav-suport">
    <span @click="handler_click">
      <el-tooltip content="消息" placement="bottom">
        <el-badge :value="100" :max="99">
          <i class="el-icon-bell"></i>
        </el-badge>
      </el-tooltip>
    </span>
    <span @click="handler_click">
      <el-tooltip content="设置" placement="bottom">
        <i class="el-icon-setting"></i>
      </el-tooltip>
    </span>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          />
          <span>{{ user }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-error" @click="handleExitClick">
              退出登录
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-info" @click="handler_click">
              用户信息
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-s-marketing" @click="handler_click">
              关于系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import localCache from '@/utils/cache'

import { ElMessage, ElMessageBox } from 'element-plus/lib/components'

export default defineComponent({
  name: 'nav-suport',
  setup() {
    const store = useStore()
    const router = useRouter()
    const user = computed(() => store.state.login.userInfo.name)

    const handler_click = () => {
      ElMessage.warning({
        message: '开发人员正在加急开发中.....',
        type: 'warning'
      })
    }

    const handleExitClick = () => {
      ElMessageBox.confirm('确定要注销登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          localCache.deleteCache('token')
          router.push('/login')
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消注销登录！'
          })
        })
    }
    return {
      user,
      handler_click,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-suport {
  display: flex;
  align-items: center;

  & > span {
    margin-right: 30px;
    font-size: 20px;
    color: #a8c0d7;
    cursor: pointer;

    &:last-of-type {
      margin-right: 15px;
    }

    :deep(.el-badge__content--danger) {
      background-color: #f5222d;
    }

    &:hover {
      color: #5cb9fe;
    }
  }

  .user-info {
    margin-right: 20px;
    .el-dropdown-link {
      display: flex;
      align-items: center;

      span {
        margin-left: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>
