<template>  
    <div  class="bottomNav">
      <tabbar class="bottomNavContainer">
        <tabbar-item v-for="(tab,index) in tabList" :key="index" :badge='tab.badge?tab.badge:""' :link='tab.component' :click="changeActiveStatus">
          <img  v-show="tab.isActive" slot="icon" :src="tab.src"/>
          <img  v-show="!tab.isActive" slot="icon" :src="tab.disSrc"/>
          <span slot="label" style="color:#6899ED">{{tab.name}}</span>
        </tabbar-item>
      </tabbar>
      </div>
</template>
<script>
import {Tabbar, TabbarItem } from 'vux'//提取到公共组件，其他单页面仅按需引用

export default {
  name:"bottomNav",
  data(){
    return{
        
    }
  },
  components:{
    Tabbar, TabbarItem
  },
  computed:{
    tabList(){
      return this.$store.state.tabList
    }
  },
  methods:{
    changeActiveStatus(){
      console.log(1)
    }
  }

}
</script>
<style scoped>

</style>


