<template>
 <div class="content">
   <el-card class="search-form">
     <el-form :inline="true" :model="form" class="demo-form-inline" label-width="90px">
       <el-form-item label="商品名：">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="规格：">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="材料/颜色：">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="数量：">
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item></el-form-item>
      <el-form-item label="" class="form-button-item">
        <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
     </el-form>
   </el-card>

   <el-card class="table-container">
     <!-- <store-form /> -->
     <el-table
    :data="tableData"

    style="width: 100%; height:100%;">
    <el-table-column
      prop="goodsName"
      label="商品名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="spersification"
      label="规则"
      width="180">
    </el-table-column>
    <el-table-column
      prop="source"
      label="材料/颜色">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" class="operation">查看</el-button>
        <el-button type="text" class="operation">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
   </el-card>
 </div>
</template>

<script>
// import storeForm from './storeForm.vue'
export default {
 name:'Store',
 components:{
  //  storeForm
 },
 data() {
   return {
     
    tableData: [{
          goodsName: '2016-05-02',
          spersification: '王小虎',
          source: '上海市普陀区金沙江路 1518 弄'
        }, {
          goodsName: '2016-05-04',
          spersification: '王小虎',
          source: '上海市普陀区金沙江路 1517 弄'
        }, {
          goodsName: '2016-05-01',
          spersification: '王小虎',
          source: '上海市普陀区金沙江路 1519 弄'
        }, {
          goodsName: '2016-05-03',
          spersification: '王小虎',
          source: '上海市普陀区金沙江路 1516 弄'
        }],
    form: {
       user: 'haha'
     }
   }
 },

//  computed: {

//  },
//  created: {
//  },
//  methods: {

//  }
}

</script>

<style lang='' scoped>

</style>