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
        component: () => import('@/views/Product')
    },
    {
        path: '/productList',
        name: 'productList',
        component: () => import('@/views/Product/ProductList.vue')
    },
    {
        path: '/productDetail',
        name: 'productDetail',
        component: () => import('@/views/Product/ProductDetail.vue')
    },
    {
        path: '/productForm',
        name: 'productForm',
        component: () => import('@/views/Product/ProductForm.vue')
    },
    {
        path: '/circle',
        name: 'circle',
        component: () => import('@/views/Circle')
    },
    {
        path: '/circleDetail',
        name: 'circleDetail',
        component: () => import('@/views/Circle/CircleDetail.vue')
    },
    {
        path: '/evaluate',
        name: 'evaluate',
        component: () => import('@/views/Evaluation/evalution_information.vue')
    },
    {
        path: '/evaluation',
        name: 'evaluation',
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
        path: '/userkong',
        name: 'userkong',
        meta: {
            requiredLogin: true,
        },
        component: () => import('@/views/User/kong.vue'),
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
        component: () => import('@/views/Brand')
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login/Index.vue')
    },
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