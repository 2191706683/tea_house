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
        path: '/productList',
        name: 'productList',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Product/ProductList.vue')
    },
    {
        path: '/productDetail',
        name: 'productDetail',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Product/ProductDetail.vue')
    },
    {
        path: '/productForm',
        name: 'productForm',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Product/ProductForm.vue')
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
        path: '/circleDetail',
        name: 'circleDetail',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/Circle/CircleDetail.vue')
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
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search')
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('@/views/Login')
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