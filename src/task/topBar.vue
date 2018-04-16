<template>
  <div class="topBar">
        <Search/>
        <Screen/>
  </div>
</template>
<script>
import Search from '@/task/search'
import Screen from '@/task/screen'
export default {
  components:{
      Search,
      Screen
  },
  
}
</script>
<style scoped>
  .topBar{
    margin-top:.4rem;
    height:1.18rem;
    line-height:.8rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background:#fff;
    margin-left:.32rem;
  }
</style>


