import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import leftMenu from '/src/layout/left-menu'
import headerView from '/src/layout/header-view'

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.config.productionTip = false
//注册全局的组件
Vue.component("leftMenu", leftMenu);
Vue.component("headerView", headerView);

//导入组件
// const home = () => import("@/components/home");
// const article = () => import("@/components/article");
//导入组件
// //登录界面
const login = () => import( "@/page/login/login");
// //内容部分
const articleManage = () => import( "@/page/content/manage-article");
const postArticle = () => import( "@/page/content/post-article");
const imageManage = () => import( "@/page/content/manage-images");
const commentManage = () => import( "@/page/content/manage-comment");
// //首页
const index = () => import( "@/page/dashboard/index");
// // 运营
const looperManage = () => import( "@/page/operation/looper");
const categoryManage = () => import( "@/page/operation/manage-category");
// // 设置
const friendLink = () => import( "@/page/settings/friend-link");
const websiteInfo = () => import( "@/page/settings/website-info");
// // 用户
const email = () => import( "@/page/user/email");
const info = () => import( "@/page/user/info");
const list = () => import( "@/page/user/list");
const resetPassword = () => import( "@/page/user/reset-password");
//base-view
const baseView = () => import( "@/layout/base-view");
const rightView = () => import("@/layout/right-view")

export const routes = [
    //登录
    {
        path: "/login",
        name: "登录",
        icon: "el-icon-guide",
        component: login
    },
    {
        path: '',
        component: baseView,
        redirect: 'index',
        children: [
            //仪表盘
            {
                path: "/index",
                hidden: false,
                name: "首页",
                icon: "el-icon-s-home",
                component: index
            },
            //内容
            {
                path: "/content",
                hidden: false,
                name: "内容",
                icon: "el-icon-files",
                component: rightView,
                children: [
                    {
                        path: "post-article",
                        hidden: false,
                        name: "发表文章",
                        icon: "el-icon-position",
                        component: postArticle
                    },
                    {
                        path: "manage-article",
                        hidden: false,
                        name: "管理文章",
                        icon: "el-icon-s-management",
                        component: articleManage
                    },
                    {
                        path: "manage-comment",
                        hidden: false,
                        name: "评论管理",
                        icon: "el-icon-chat-dot-square",
                        component: commentManage
                    }, {
                        path: "manage-images",
                        hidden: false,
                        name: "图片管理",
                        icon: "el-icon-picture-outline",
                        component: imageManage
                    }
                ]
            },
            //用户相关
            {
                path: "/user",
                hidden: false,
                name: "用户中心",
                icon: "el-icon-user",
                component: rightView,
                children: [
                    {
                        path: "email",
                        hidden: false,
                        name: "邮箱管理",
                        icon: "el-icon-message",
                        component: email
                    },
                    {
                        path: "reset-password",
                        hidden: false,
                        name: "重置密码",
                        icon: "el-icon-lock",
                        component: resetPassword
                    },
                    {
                        path: "info",
                        hidden: false,
                        name: "账户信息",
                        icon: "el-icon-zoom-in",
                        component: info
                    }, {
                        path: "list",
                        hidden: false,
                        name: "用户列表",
                        icon: "el-icon-user",
                        component: list
                    }
                ]
            },
            //运营相关
            {
                path: "/operation",
                hidden: false,
                name: "运营",
                icon: "el-icon-video-play",
                component: rightView,
                children: [
                    {
                        path: "looper-manage",
                        hidden: false,
                        name: "轮播图管理",
                        icon: "el-icon-folder-opened",
                        component: looperManage
                    },
                    {
                        path: "category-manage",
                        hidden: false,
                        name: "分类管理",
                        icon: "el-icon-pie-chart",
                        component: categoryManage
                    }
                ]
            },
            //设置相关
            {
                path: "/settings",
                hidden: false,
                name: "设置",
                icon: "el-icon-setting",
                component: rightView,
                children: [
                    {
                        path: "friend-link",
                        hidden: false,
                        name: "友情链接",
                        icon: "el-icon-link",
                        component: friendLink
                    },
                    {
                        path: "website-info",
                        hidden: false,
                        name: "网站信息",
                        icon: "el-icon-coin",
                        component: websiteInfo
                    }
                ]
            }
        ]
    }

]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
