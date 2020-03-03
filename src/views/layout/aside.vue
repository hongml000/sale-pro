<template>
 <div class="left-aside">
   <el-menu
   router
    background-color="#545c64"
      text-color="#fff"
      active-text-color="yellow"
      @open="handleOpen"
      @close="handleClose">
    <!-- <el-submenu></el-submenu> -->
    <el-menu-item index="/">
      <span class="icon iconfont iconall"></span>
      概览
    </el-menu-item>
    <el-menu-item index="/store">
      <span class="icon iconfont iconstore"></span>
      商店
    </el-menu-item>
    <el-menu-item index="/car">
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
 },

//  computed: {

//  },
//  created: {

//  },
 methods: {
   handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
 }
}

</script>

<style lang='' scoped>

</style>