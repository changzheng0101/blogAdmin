import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

//导入组件
// const home = () => import("@/components/home");
// const article = () => import("@/components/article");
// //登录界面
// const login = () => import( "@/page/login/login");
// //内容部分
// const articleManage = () => import( "@/page/content/manage-article");
// const postArticle = () => import( "@/page/content/post-article");
// const imageManage = () => import( "@/page/content/manage-images");
// const commentManage = () => import( "@/page/content/manage-comment");
// //首页
// const index = () => import( "@/page/dashboard/index");
// // 运营
// const looperManage = () => import( "@/page/operation/looper");
// const categoryManage = () => import( "@/page/operation/manage-category");
// // 设置
// const friendLink = () => import( "@/page/settings/friend-link");
// const websiteInfo = () => import( "@/page/settings/website-info");
// // 用户
// const email = () => import( "@/page/user/email");
// const info = () => import( "@/page/user/info");
// const list = () => import( "@/page/user/list");
// const resetPassword = () => import( "@/page/user/reset-password");
//base-view
const baseView = () => import( "@/layout/base-view");


const routes = [
    {
        path: '',
        component: baseView
    }
    // {
    //     path: '/article',
    //     component: article
    // }
];

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router;
