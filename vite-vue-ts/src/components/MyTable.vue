<template>
  <el-table
    ref="tableRef"
    :data="tableData"
    v-on="tableEvent"
    v-bind="tableProps"
    style="width: 100%"
  >
    <!-- <el-table-column type="index" />
    <el-table-column type="selection" width="55" />
    <el-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column property="name" label="Name" width="120" />
    <el-table-column property="address" label="Address" show-overflow-tooltip /> -->
    <MyTableColumn
      v-for="column in columns"
      :key="column.label || column.key"
      :column="column"
    />
  </el-table>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MyTableColumn from "./MyTableColumn.vue";
import type { ElTable, ElTableColumn } from "element-plus";
type Props = {
  tableData: unknown;
  columns: unknown[];
  tableEvent?: unknown;
  tableProps?: unknown;
};
const props = withDefaults(defineProps<Props>(), {
  tableData: () => [],
  // 复杂的数据类型需要 一个函数 return 的形式 如下
  columns: () => [],
  tableEvent: () => {},
  tableProps: () => {},
});

const tableRef = ref<InstanceType<typeof ElTable>>();
</script>

<style scoped lang="scss"></style>
