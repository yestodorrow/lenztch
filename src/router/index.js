import Vue from 'vue'
import Router from 'vue-router'
import Task from '@/index/task'
import Community from '@/index/community'
import Service from '@/index/service'
import User from '@/index/user'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component: Task
    },
    {
      path:"/task",
      component:Task
    },
    {
      path:'/community',
      component:Community
    },
    {
      path:'/service',
      component:Service
    },{
      path:'/user',
      component:User
    }
  ]
})
