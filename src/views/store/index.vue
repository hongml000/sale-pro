<template>
 <div>
   <el-card class="search-form">
     <el-form :inline="true" :model="form" class="demo-form-inline" label-width="100px">
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
      <el-form-item label="" class="form-button-item">
        <el-button type="primary" @click="submitForm('ruleForm')">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
     </el-form>
   </el-card>

   <el-card>
     <el-table class="table"></el-table>
   </el-card>
 </div>
</template>

<script>
export default {
 name:'Store',
 components:{},
 data() {
   return {
     form: {
       user: 'haha'
     }
   }
 }

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