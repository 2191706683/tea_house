const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home')
        
    },
    {
        path: '/articleDetail',
        name: 'articleDetail',
        component: () => import('@/views/Home/ArticleDetail')
        
    },
    {
        path: '/product',
        name: 'product',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Product')
    },
    {
        path: '/circle',
        name: 'circle',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Circle')
    },
    {
        path: '/evaluation',
        name: 'evaluation',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Evaluation')
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/User/index.vue'),
    },
    {
        path: '/userDetail',
        name: 'userDetail',
        component: () => import('@/views/User/UserDetail.vue'),
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/User/SetUser.vue'),
    },
    
    {
        path: '/brand',
        name: 'brand',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Brand')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/circleList.vue')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search')
    },
    // {
    //     path: '/search',
    //     name: 'search',
    //     meta: {
    //         index: 2
    //     },
    //     component: () => import('@/views/Search/Index.vue')
    // },
    // {
    //     path: '/detail',
    //     name: 'detail',
    //     meta: {
    //         index: 2
    //     },
    //     component: () => import('@/views/Detail/Index.vue')
    // },
    // {
    //     path: '/buy',
    //     name: 'buy',
    //     meta: {
    //         requiredLogin: true,
    //         index: 3
    //     },
    //     component: () => import('@/views/Buy/Index.vue')
    // },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('@/views/Login/Index.vue')
    // },
    {
        path: '/404',
        name: 'NotFound',
        component: () => import('@/views/NotFound/Index.vue')
    },
    // 所有未定义路由，全部都重定向到404页
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

export default routes