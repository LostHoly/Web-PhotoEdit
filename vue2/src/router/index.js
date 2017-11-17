import Vue from 'vue';
import Router from 'vue-router';
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'ExfFHQ9aBANWYARtVU3neAeTP6nfUZcT'
})
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/addpt',
                    component: resolve => require(['../components/page/Addpt.vue'], resolve)
                },
                {
                    path: '/mdlist',
                    component: resolve => require(['../components/page/Mdlist.vue'], resolve)
                },
                {
                    path: '/adddt',
                    component: resolve => require(['../components/page/Adddt.vue'], resolve)
                },
                {
                    path: '/dtlist',
                    component: resolve => require(['../components/page/Dtlist.vue'], resolve)
                }
            ],
             meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
