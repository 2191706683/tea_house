const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home')
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
        component: () => import('@/views/User')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/components/teaIcon.vue')
    }
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
    // {
    //     path: '/404',
    //     name: 'NotFound',
    //     component: () => import('@/views/NotFound/Index.vue')
    // },
    // // 所有未定义路由，全部都重定向到404页
    // {
    //     path: '/:pathMatch(.*)',
    //     redirect: '/404'
    // }
]

export default routes