<template>
  <el-table-column v-if="props.column.defaultScope" v-bind="bindColumn">
    <template #default="scope">{{ props.column.defaultScope(scope) }}</template>
  </el-table-column>
  <el-table-column v-else-if="props.column.editColumn" v-bind="bindColumn">
    <template #default="scope">
      <!-- <component
        v-if="editColumn.type === 'edit'"
        v-bind:is="editColumn.component"
        v-model="scope.row[column.property]"
        v-on="editColumn.events"
        v-bind="editColumn.props"
      ></component>
      <span v-else>{{ scope.row[column.property] }}</span> -->
      <ColumnContent :editColumn="editColumn" :property="column.property" :scope="scope"></ColumnContent>
    </template>
  </el-table-column>
  <el-table-column v-else v-bind="bindColumn" />
</template>
<script setup lang="ts">
import { computed, ref, toRaw } from "vue";
// import type { ElTableColumn } from "element-plus";
import ColumnContent from "./ColumnContent.vue";
type Props = {
  column: any;
};
const props = withDefaults(defineProps<Props>(), {
  column: () => {},
});
const bindColumn = computed(() => {
  const p = { ...props.column };
  delete p.defaultScope;
  delete p.editColumn;
  return p;
});
const editColumn = computed(() => {
  if (props.column.editColumn?.type === "edit") {
    return {...props.column.editColumn, component: toRaw(props.column.editColumn.component)}
  }
  return props.column.editColumn;
});
</script>

<style scoped lang="scss"></style>
