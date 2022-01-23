<template>
  <div class="nav-header">
    <i
      class="trigger"
      :class="isFold ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="handleFoldClick"
    ></i>
    <nav-suport />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavSuport from './cpns/nav-suport.vue'

export default defineComponent({
  components: {
    NavSuport
  },
  setup(props, { emit }) {
    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
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
}
</style>
