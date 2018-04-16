<template>
  <div class="tasklist">
    
      <div v-for="(task,index) in taskList" :key="index" class="tasklistfrombackendd">
            <div>
                <img v-if="task.hasActivity>0" src="../assets/img/icons/prize.png" alt="">
                <span class="taskName">{{task.taskName}}</span>
            </div>
        </div>
  </div>
</template>
<script>

export default {
    name:"taskList",

    data(){
        return {
            
        }
    },
    components:{
        
    },
    computed:{
        taskList(){
            return this.$store.state.taskList
        }
    },
}
</script>
<style coped>
    .tasklist{
        width:9.2rem;
        height:8rem;
        overflow-y:scroll;
        margin-left:auto;
        margin-right:auto;
        
    }
    .taskList::-webkit-scrollbar{
        display:none;
    }
    .tasklistfrombackendd{ 
        padding:.2rem;
        margin-top:.25rem;
        background:#fff;
        border-radius:3px;
    }
    .taskName{
        font-size:.42rem;
        color:#42506C
    }
</style>

