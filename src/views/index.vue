<template>
 <div class="layout">
   <el-container>
     <el-header class="title">xxx管理系统</el-header>
     <el-aside class="aside">
       <Aside />
     </el-aside>
     <el-main>
       <router-view></router-view>
     </el-main>
   </el-container>
 </div>
</template>

<script>
import Aside from './layout/aside'
export default {
 name: "HomePage",
 components:{
   Aside
 },
 data() {
   return {

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

<style scoped>
.title {
  font-size: 28px;
  line-height: 60px;
}
.layout {
  height: 100%;
}


</style>