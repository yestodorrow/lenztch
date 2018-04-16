import Vue from 'vue'

import http from 'axios'


http.defaults.timeout = 20000;
http.defaults.headers.get['Content-Type'] = 'Application/x-www-from-urlencoded;charset=UTF-8';

import Vuex from 'vuex'

Vue.use(Vuex)
const store =new Vuex.Store(
    {
        state:{
                //tabbar页底的标签，兼容到以后修改/增删/响应式自动等分布局
                tabList:[

                    {//响应式，though这种标签十年不改一次，但是。。。以后可能增加/修改新的标签，这里可以以后直接修改维护，提高开发修改进度---探讨是否集中统一规划一个中央数据系统
                        component:"task",
                        isAcitve:true,//to do :考虑是否需要统一方法掉配？
                        src:'../static/img/icons/task.png',
                        disSrc:'../static/img/icons/task_disselected.png',
                        name:"任务",
                        badge:"2"//to do: 考虑badge是否需要分开，应该是集中统一规划消息条数
                    },
                    {
                        component:"community",
                        src:'../static/img/icons/community.png',
                        isAcitve:false,
                        disSrc:'../static/img/icons/community_disselected.png',
                        name:"社区",
                        badge:"5"
                    },
                    {
                        component:'service',
                        src:'../static/img/icons/service.png',
                        disSrc:'../static/img/icons/service_disselected.png',
                        isAcitve:false,
                        name:"客服",
                        badge:'2'
                    },
                    {
                        component:"user",
                        src:'../static/img/icons/user.png',
                        disSrc:'../static/img/icons/user_disselected.png',
                        isAcitve:false,
                        name:"我的",
                        badge:"9"
                }],
                swiperList:[//运营页面，常改，可能是接口，可能是单独配置
                        {
                            url:"",
                            imgSrc:'../static/img/banner.png'
                        },
                        {
                            url:"",
                            imgSrc:'../static/img/banner.png'
                        },
                        {
                            url:"",
                            imgSrc:'../static/img/banner.png'
                        }
                ],
                taskmap:[
                        {
                            src:'../static/img/renwu.png'
                        },

                        {
                            src:'../static/img/gaoxin.png'
                        }
                ],
                taskTabContent:[//tab标签内容，这里也是有可能会变化的，js循环，自动均分屏幕
                    {
                        name:'价格最高',
                    },
                    {
                        name:'无地址任务',
                    },
                    {
                        name:'新手任务',
                    }
                ],
                taskList:[],//主任务列表，加载app时请求
                screenList:[],//筛选列表
                selectedScreenList:[]
        },
        actions:{
            loadtasks(context,params){ 
                //考虑列表 保存在localStorage
                if(params.gps){
                    console.log(params.gps)
                } else if(params.cb){
                    params.cb()
                }
                else{
                    console.log("没有gps")
                }
                http.get('/api/task_mobile/maintask/getUserMainTaskListForFirmV2.do',{
                    params: {
                        range:'39.9397542287 116.4703221014',
                        userGPS:'39.9219000000 116.4435500000',
                        uId:'afdcafbead4548f9b402621410bf4e98'
                    }
                })
                .then(result=>{ 
                    context.commit('ALLTASKS',result.data.task);
                    localStorage.setItem("taskList",JSON.stringify(result.data.task));
                })
                .catch(err=>{ 
                        let data=JSON.parse(localStorage.getItem("taskList"));
                        console.log(" 没有缓存");
                        context.commit("SILENTTASKS",data);
                })    
            },
            importScreenList(context,params){
                http.get("/api/task_mobile/filterTaskByUid.json",{
                    params:{
                        uId:'fdcafbead4548f9b402621410bf4e98',
                        province:'江苏',
                    }
                })
                .then(res=>{
                    // console.log(res.data.retData.task)//触发mutataions
                    context.commit("ALLSCREENLIST",res.data.retData.task)
                })
                .catch(err=>{
                    
                })
            }

        },
        mutations:{
                SILENTTASKS(state,data){
                    console.time("start");
                    state.taskList = data; 
                    console.timeEnd("start") 
                },
                ALLTASKS(state, data){
                    state.taskList = data; 
                },
                ALLSCREENLIST(state,data){
                    state.screenList=data
                }
        }

    }
)   
export default store
