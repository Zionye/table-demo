<template>
  <div class="">
    <TableWrapperTable 
      :showHeader="true"
      :dataFields="dataFields"
      :fixedHeader="false"
      :showRadio="true"
    ></TableWrapperTable>
  </div>
</template>

<script setup>
// import searchField from './searchFields'
import dataField from '../server/table/dataFields'
console.log('dataField: ', dataField);

// const searchFields = reactive(searchField)
const dataFields = reactive(dataField)
console.log('dataFields: ', dataFields);

</script>