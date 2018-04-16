<template>
        <swiper   
            class="swiper"  
            height="imgHeight"
            dots-position='center'
            loop auto
        >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgSrc">
      </swiper-item>
    </swiper>
</template>
<script>
import {Swiper,SwiperItem} from 'vux'
export default {
    data(){
        return{
            imgHeight:"2rem",
            interval:3000,
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    computed:{
        swiperList(){    
            return this.$store.state.swiperList
        }
    },
    methods:{
        onSwiperItemIndexChange(){
            
        }
    }
}
</script>
<style scoped>
   .swiper{
       background:#fff;
       height:3.4rem;
   }
    .vux-slider{
        width:9.2rem!important;
    }
    img{
        width:100%!important;
    }
</style>


