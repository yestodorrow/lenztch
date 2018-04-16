// var proxy =require('http-proxy-middleware')
// var proxyList= {
//     '/maintask': {
//         // 测试"环境
//         "target": 'http://mobile.ppznet.com/task_mobile/maintask/',  // 接口域名
//         changeOrigin: true,  //是否跨域
//         pathRewrite: {
//             '^/maintask': '/maintask'   //需要rewrite重写的,
//         }              
//     }
// }
// var proxyList=proxy(proxyList)
var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/maintask', {target: 'http://mobile.ppznet.com/task_mobile/maintask/'});
module.exports= apiProxy