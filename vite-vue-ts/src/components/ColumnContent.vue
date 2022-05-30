<template>
  <div :class="{'is-error': state.validateState}">
    <component
      v-if="editColumn.type === 'edit'"
      ref='inputRef'
      v-bind:is="editColumn.component"
      v-model="scope.row[property]"
      v-on="events"
      v-bind="editColumn.props"
      @change="handleChange"
    ></component>
    <span v-else>{{ scope.row[property] }}</span>
  </div>
</template>
<script setup lang="ts">
import { computed, getCurrentInstance, onBeforeMount, reactive, ref, inject } from "vue";
// import type { ElTableColumn } from "element-plus";
type Props = {
  editColumn: any;
  property: string;
  scope: any;
};
const inputRef = ref<any>();
const props = withDefaults(defineProps<Props>(), {
  editColumn: () => {},
  property: undefined,
  scope: () => {},
});
const events = computed(() => {
  const listener = {...(props.editColumn.events || {})}
  delete listener.change
  return listener;
})
const state = reactive({validateState: '', errorMessage: ''});
function resetValidateState () {
  state.validateState = ''
  // if (inputRef.value.$el && inputRef.value.$el.querySelector('input')) {
  //   inputRef.value.$el.querySelector('input')!.style.borderColor = ''
  // }
}
const tableValidateList: any[] = inject('tableValidateList') || [];
onBeforeMount (() => {
  const instance = getCurrentInstance();
  tableValidateList.push(instance);
});
function validate () {
  resetValidateState();
  return new Promise((resolve, reject) => {
    const promiseList: any[] = []
    if (props.editColumn.rules && props.editColumn.rules.length) {
      props.editColumn.rules.forEach((rule: any) => {
        promiseList.push(new Promise((resolve, reject) => {
          // 是否是非空验证，先验证非空验证
          if (rule.required && !props.scope.row[props.property]) {
            reject(rule.message)
          } else if (rule.validator && typeof rule.validator === 'function') {
            // 调用自定义验证方法验证
            rule.validator(props.scope.row[props.property], props.scope, (errMessage: any) => {
              if (errMessage) {
                reject(errMessage)
              } else {
                resolve('')
              }
            })
          } else {
            resolve('')
          }
        }))
      })
    }
    Promise.all(promiseList).then(() => {
      resolve('')
    }).catch(err => {
      console.log(err, inputRef.value.$el.querySelector('input'))
      // if (inputRef.value.$el && inputRef.value.$el.querySelector('input')) {
      //   inputRef.value.$el.querySelector('input')!.style.borderColor = 'red'
      // }
      state.validateState = 'error'
      state.errorMessage = err
      reject(err)
    })
  })
}

function handleChange (...arg: any[]) {
  state.validateState = ''
  // 验证数据的正确性
  if (props.editColumn.rules && props.editColumn.rules.length) {
    validate().catch(() => {})
  }
  props.editColumn.events?.change(props.scope, ...arg)
}
defineExpose({
  scope: props.scope,
  validate,
})
</script>

<style scoped  lang="scss">
  :deep(.el-input__wrapper) {
    box-shadow: none;
    border: 1px solid #dcdfe6;
  }
  :deep(.el-input__wrapper:hover) {
    box-shadow: none;
    border: 1px solid #c0c4cc;
  }
  :deep(.el-input__wrapper.is-focus) {
    box-shadow: none;
    border: 1px solid #409eff;
  }
  .is-error {
    :deep(.el-input__wrapper) {
      box-shadow: none;
      border: 1px solid red;
    }
  }
</style>
