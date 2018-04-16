<template>

<flexbox class="taskmap"
    align="center"
>
      <flexbox-item v-for="(img,index) in taskmap" :key="index">
        <div class="taskitems" >
            <img :src="img.src" alt="" class="taskImg" @click="highReturn">   
        </div>
    </flexbox-item>      
</flexbox>

</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import { Toast } from 'mint-ui';
export default {
  name:"taskmap",
  data(){
      return {
      }
  },
  computed:{
      taskmap(){
        return this.$store.state.taskmap
      }
  },
  components:{
    Flexbox,
    FlexboxItem
  },
  methods:{
      highReturn(){
            console.log("highReturn");
            // this.$vux.toast.show({
            //     height:"3rem",
            //     text: '敬请期待',
            //     position:"middle",
            //     type:""
            // });
            // this.$vux.toast.hide()
            Toast({
                message: '提示',
                position: 'bottom',
                duration: 5000
            });
    }
  }
}
</script>
<style scoped>
.taskmap{
    background:#fff;
    height:2rem;
    line-height:2rem;
}
.vux-flexbox-item{
    height:2rem!important;
}
.taskitems{
    display:block;
    margin:.2rem 0;
    height:2rem;
}
.taskImg{
    width:100%;
}
</style>


