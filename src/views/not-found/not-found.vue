<template>
  <div class="no-page">
    <div class="img-wrap">
      <img class="img" src="~@/assets/img/404.png" alt="404" />
    </div>
    <div class="content">
      <h1>404</h1>
      <div class="desc">抱歉，您访问的页面不存在或仍在开发中</div>
      <div class="action">
        <el-button type="primary" size="small" @click="back"
          >返回首页</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const back = () => {
      router.push('/main')
    }
    return {
      back
    }
  }
})
</script>

<style scoped lang="less">
.no-page {
  width: 90%;
  min-width: 1000px;
  height: 80%;
  display: flex;
  align-items: center;

  .img-wrap {
    width: 60%;
    display: flex;
    justify-content: flex-end;

    .img {
      height: 360px;
    }
  }
  .content {
    flex: auto;
    margin-bottom: 30px;

    h1 {
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }

    .desc {
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
    }
  }
}
</style>
