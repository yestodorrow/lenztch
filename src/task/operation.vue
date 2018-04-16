<template>
  <div class="operation">
      <Swiper/>
      <Taskmap/>
      <!-- <Highreturnmap/> -->
  </div>
</template>
<script>
import Swiper from '@/task/swiper'
import Taskmap from '@/task/taskmap'
import Highreturnmap from '@/task/highreturnmap'
export default {
  components:{
      Swiper,
      Taskmap,
      // Highreturnmap
  }

}
</script>
<style scoped>
.operation{
  width:9.2rem;
  margin:.2rem auto;
}
</style>


