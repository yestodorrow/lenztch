<template>
  <div class="screen">
     <span @click="handleClick" class="screenBtn">筛选</span>
     <mt-popup 
        v-model="popupVisible" 
        position="bottom"
        modal="true"
        >
        <group 
          gutter=0
          label-margin-right=".4rem" 
          label-align="right"
        >
          <x-input 
            :title='SelctAll'
            :placeholder="placeholderText"
            v-model="kw" 
            :max="130" 
          >
          
          </x-input>
         
        </group>
        
       <screen-list></screen-list>
      <x-button type="primary" class="screenSubmitBtn">{{screenSubmitBtnText}}</x-button>
    </mt-popup>
    
  </div>
</template>
<script>

import ScreenList from '@/task/screenList'

// 筛选 内搜索
import { Group,Cell,Search,XInput,Radio,XButton} from 'vux'
export default {

  data(){
    return{
          kw:'',//这里是将来搜索的关键词   to do  考虑缓存  放到store中？？？
          placeholderText:'请输入任务类型关键词',
          popupVisible:false,  
          screenSubmitBtnText:'确定' ,
          selectAll:'<span style="position:absolute;top:0;left:-1rem;!important">全选</span>'  
    }
  },
  components:{
    Group,
    Cell,
    Search,
    XInput,
    Radio,
    ScreenList,
    Cell,
    XButton
  },
  methods:{
      handleClick() {
        this.popupVisible = !this.popupVisible
      }
  },
  created(){
      this.$store.dispatch("importScreenList",{})
  },
  
  
  
}
</script>

<style scoped>
  .screen{
    width:1.5rem;
    color:#42506C;
    font-size:.4rem;
    background:#fff;
    text-align: center;
    overflow:hidden;
  }
  .screenBtn{
    font-size:.4rem;
    color:#42506C;
  }
  .screenSubmitBtn{
    width:9.2rem;
    background: #3887FD;
  }
  .mint-popup.mint-popup-bottom{
    left: 0rem;
    width: 10rem;
    top: 1.8rem;
    background:#fff;
    padding:.2rem 0;
  }

  #vux-x-input-axzwt{
    margin-left:-2rem;
  }
</style>

 
