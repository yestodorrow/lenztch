<template>
      <div class="screenList">
        <div class="screenContent">
           <checklist
            :options='screenItem'
            v-model="selectedScreenList"
            :label-position="position"
            
           >
           </checklist>
        </div> 

      </div>
</template>
<script>
import {Group,Checklist,XButton} from 'vux'
export default {
  name:'screenList',
  data(){
      return{
          screenItem:[],
          position:"left"
      }
  },
  components:{
      Group,
      Checklist,
      XButton
  },
  computed:{
    screenList(){
      return this.$store.state.screenList
    },
    selectedScreenList(){
      return this.$store.state.selectedScreenList
    },
  },
  created(){
      
  },
  watch:{
    screenList(){
      for(let i in this.$store.state.screenList){
        this.screenItem.push(
          this.$store.state.screenList[i].taskName
          )
      }
    },
 
    screenItem(){
      console.log(this.screenItem)
    }
  },
  methods:{
    
  }
}
</script>
<style coped>
.screenList{
    height:70vh;
    padding-left:-0.2rem; 
    display:flex;
    overflow:scroll;
  }

  .weui-cells{
    overflow:visible!important; /*  默认的坑*/
    font-size:.32rem!important;
    text-align:left!important;
    width:9rem!important;
  }
  .screenContent .weui-cell__hd{
    margin-right:-1rem!important;
  }
  .weui-check_label{
    height:1.2rem!important;
    margin-top:.2rem!important;
    background:#fff!important;
  }
  .screenList::-webkit-scrollbar{
    display: none
  }
</style>


