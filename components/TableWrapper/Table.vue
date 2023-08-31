<template>
  <!-- 搜索部分 -->
  <TableWrapperSearch :searchFields="searchFields" :showSearch="showSearch"></TableWrapperSearch>
  <!-- tab部分 -->
  <TableWrapperTabs :showTabs="showTabs"></TableWrapperTabs>

  <!-- 表格部分 -->
  <div id="TableComponent" >
    <!-- 数据,操作部分 -->
    <table
      :height="autoHeight?undefined:`${tableHeight}px`"
      :border="border"
      :class="[border??'border', autoHeight?'':`h-[${tableHeight}px]`]"
      class="w-[100vw]"
    >
    <thead v-if="showHeader">
      <tr class="flex w-full bg-gray-100">
        <!--单选框-->
        <th v-if="showRadio"><input type="radio"></th>

        <th class="inline-block flex-1 z-10" :class="index==0?'sticky left-0':''" :width="item.width" v-for="(item,index) in dataFields.headerSource" :key="item.id" >{{ item.label }}</th>
      </tr>
    </thead>

    <tbody class="inline-block w-full" :class="[fixedHeader? `h-[${tableHeight}px] overflow-y-auto`:'']">
      <tr class="flex w-full max-h-12" v-for="(item,index) in dataFields.tableDataSource" :key="item.id">
        <!--单选框-->
        <td v-if="showRadio"><input type="radio"></td>

        <td class="sticky left-0 inline-block flex-1">{{ item.ID }}</td>
        <td class="inline-block flex-1" >{{ item.taskType }}</td>
        <td class="inline-block flex-1" >{{ item.status }}</td>
      </tr>
    </tbody>
    </table>
  </div>

  <!-- 分页部分 -->
  <TableWrapperPagination :showPagination="showPagination"></TableWrapperPagination>
</template>

<script setup>
const props = defineProps(['border', 'dataFields', 'showHeader', 'fixedHeader', 'showRadio'])
const { 
  dataFields, 
  border, // 是否带边框
  showHeader, // 是否显示表头
  fixedHeader, // 是否固定表头
  showRadio // 是否显示单选框 (可照此添加：多选框、序号等)
} = toRefs(props)

const autoHeight = ref(false) // 是否自适应高度
const tableHeight = ref(200) // 表格高度

// onMounted(()=>{
//   getTableHeight()
// })

// 获取表格高度
const getTableHeight = () => {
  // ...
}
</script>