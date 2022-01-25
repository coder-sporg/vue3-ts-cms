<template>
  <div class="custom-form">
    <el-form :label-width="labelWidth" :size="size">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              :label="item.label"
              :rules="item.rules"
              :style="formItemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.dateOption"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: [String, Number],
      default: '80px'
    },
    size: {
      type: String,
      default: 'small'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8, // 1200
        md: 12, // 992
        sm: 24, // 768
        xs: 24 // < 768
      })
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    formItemStyle: {
      type: Object,
      default: () => ({ padding: '0 30px' })
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.custom-form {
  padding-top: 22px;
}
</style>
