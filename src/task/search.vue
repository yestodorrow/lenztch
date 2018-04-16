<template>
  <div class="search">
     <x-input    
      :placeholder="placeholderText"
      v-model.trim="kw"
      >
        <img slot="label" style="padding-right:10px;display:block;" :src="icoSrc" width="18" height="18">
      </x-input>
  </div>
</template>
<script>
import { XInput } from 'vux'
export default {
  data(){
      return{
            results:[],
            kw:'',
            fixed:false,
            cancelText:'',
            placeholderText:"按地址搜索",
            icoSrc:"./static/img/icons/search.png"
      }
  },
  methods:{      
   
    searchBykw(e){
      console.log(e)
    }
  },
  components:{
     XInput
  }
}
</script>
<style coped>
  .search{
      width:7.80rem;
      background:#fff;
      font-size:.36rem;
      border-radius:.4rem;
      padding-right:.32rem;
  }
  .weui-cell{
    padding:0!important;
    width:7.8rem!important;
    background:#F7F9FC;
    height:.78rem;
    line-height:.78rem;
    padding-left:.32rem!important;
    border-radius:.4rem;
  }
  /* .weui-search-bar__label{
    text-align:left!important;
  }  
  ..weui-cell{

   .weui-search-bar{
     width:7.86rem!important;
     height:.78rem!important;
     line-height:.78rem!important;
     margin-top:.2rem;
     background:#fff!important;
     padding:0!important;
     text-align:left!important;
     border:none!important;
   }
   .weui-search-bar:after，.weui-search-bar:before{
     content:''!important
   }
    .weui-search-bar__form{
      border:none!important;
    }
   .vux-search-box{

      border-radius:.4rem!important;
   }
   .weui-search-bar__box{
     background:#fff!important;
     height:.78rem!important;
     line-height:.78rem!important;
   }
   .weui-search-bar__form:after,.weui-search-bar__form:before,.weui-search-bar:after{
     
     border:none!important;
   }
   .weui-search-bar__input{
        
   }
   .weui-search-bar__label{
     background:rgba(247,249,252,1)!important;
     border-radius:.4rem!important;
   } */
</style>


