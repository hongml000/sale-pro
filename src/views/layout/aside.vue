<template>
 <div class="left-aside">
   <el-menu
    background-color="#545c64"
      text-color="#fff"
      active-text-color="yellow">
    <!-- <el-submenu></el-submenu> -->
    <el-menu-item index="1">
      <span class="icon iconfont iconall"></span>
      概览
    </el-menu-item>
    <el-menu-item index="2">
      <span class="icon iconfont iconstore"></span>
      商店
    </el-menu-item>
    <el-menu-item index="3">
      <span class="icon iconfont iconauto"></span>
      车仓
    </el-menu-item>
   </el-menu>
 </div>
</template>

<script>
export default {
 name: "Aside",
 components:{},
 data() {
   return {

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