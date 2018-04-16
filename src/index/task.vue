<template>
  <div class="task">
      <TopBar/>
      <Operation/>
      <!-- 主任务列表所有静态页面 -->
      <!-- banner 图 交互页面 -->
      <!-- to-do- 筛选交互功能，筛选二级列表页面书写，筛选再次筛选popup交互功能，欣东需要提供传入的参数，欣东解析地址 增加记忆默认筛选的选项 筛选请求接口-->
      <Tasktab/>
      <!-- 高薪单 交互：敬请期待 -->
      <!-- to do 筛选交互：  根据任务关键词搜索 -->  
      <!-- 任务列表静态页面，任务列表交互功能，按照距离排序，无地址任务交互 -->
      <!-- 新手专享  敬请期待 -->
      <!-- to do 立即预约的交互 -->
  </div>
</template>
<script>
import TopBar from '@/task/topBar'
import Operation from '@/task/operation'
import Tasktab from '@/task/tasktab'
export default {
  name:"task",
  components:{
    TopBar,
    Operation,
    Tasktab
  },
  
}
</script>
<style scoped>

</style>


