<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <Table></Table> -->
  <el-button @click="showData">打印table数据</el-button>
  <MyTable ref="tableRef" :columns="columns" :tableData="tableData" :tableEvent="tableEvent"></MyTable>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import MyTable from "./components/MyTable.vue";
import { ElInput} from "element-plus";
// import Table from "./components/Table.vue";
import { reactive, ref } from "vue";

const tableRef = ref();
const columns = reactive([
  {
    type: "index",
    label: '序号',
    width: 55,
  },
  {
    type: "selection",
    width: 55,
  },
  {
    label: "日期",
    width: 120,
    property: 'date',
    defaultScope: (scope: any): any => {
      return scope.row.date + '11';
    }
  },
  {
    label: "名称",
    width: 120,
    property: 'name',
    // editColumn: {
    //   type: 'input',
    //   props: {},
    //   events: {},
    // }
  },
  {
    label: "地址",
    property: 'address',
    editColumn: {
      type: 'edit',
      rules: [
        {
          validator: (value: any, scope: any, back: any) => {
            console.log(value, scope);
            back('错误')
          }
        }
      ],
      component: ElInput,
      props: {},
      events: {
        change: (scope: any, ...arg: any[]) => {
          console.log(scope, 11, ...arg, 22)
        }
      },
    }
  },
]);
interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = reactive([
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-08",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-06",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-07",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
]);
const showData = () => {
  console.log('tableData', tableData);
  console.log(tableRef.value.getValidates(), tableRef.value.validate());
}
const multipleSelection = ref<User[]>([])
const handleSelectionChange = (val: User[]) => {
  console.log(111, val);
  multipleSelection.value = val;
};
const tableEvent = {
  selectionChange: handleSelectionChange,
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
