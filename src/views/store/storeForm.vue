<template>
  <el-table :data="tableData" width="100%">
    <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
  </el-table>
</template>

<script>
export default {
 name:"storeForm",
 components:{},
 data() {
   return {

   }
 },

 computed: {

 },
 created: {

 },
 methods: {

 }
}

</script>

<style lang='stylus' scoped>

</style>