<template>
    <div class="tasktab">
        <tab class="taskHeadline"
            :line-width="3"
            :active-color="activeColor"
            :bar-active-color="activeColor"
            
            :custom-bar-width="barWidth"
            >
        <tab-item 
            v-for="(tab,index) in taskTabContent"
            :key="index"
            :selected="index===0?true:false"
            active-color="#42506C"
            default-color="#42506C"
           
            >
            {{tab.name}}
        </tab-item>
        </tab>
        <List/>
    </div>

</template>
<script>
import List from '@/task/taskList'
import {Tab,TabItem,Card} from 'vux'
export default {
    data(){
        return{
            activeColor:"#409EFF",
            barWidth:".5rem",   
        }
    },
    components:{
      Tab,
      TabItem,
      Card,
      List
  },
  methods:{
      handler(e){
          console.log(e)
      }
  },
  computed:{
      taskTabContent(){
        return this.$store.state.taskTabContent
      },
      taskList(){
          return this.$store.state.taskList
      }
  },
   filters:{
      currency: function(value) {
        return '¥ ' + value;
    }
  }
}
</script>
<style scoped>

.tasktab{
    background:#F7F9FC!important;
    padding-top:.35rem;
} 
</style>


