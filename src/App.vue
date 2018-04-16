<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Bottom/> -->
  </div>
</template>

<script>
// import Bottom from '@/index/bottomNav'
export default {
  name: 'app',
  components:{
    //  Bottom
  },
  created:function(){
    
    this.$store.dispatch('loadtasks',{
      "gps":this.$cookie.get("gps"),
      "province":this.$cookie.get("province"),
      "cb":function(){
        console.log("finishing loading tasks")
      }
      });
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';


</style>
