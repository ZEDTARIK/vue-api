import { createRouter, createWebHistory } from 'vue-router'
import EventView from '../views/EventView.vue'
import EventDetail from '../components/Events/EventDetail.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [{
        path: '/',
        redirect: '/events'
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {

        path: '/events',
        name: 'Events',
        component: EventView
    },
    {
        path: '/events/:id',
        name: 'EventDetail',
        props: true,
        component: EventDetail
    },
    {
        path: '/:catchAll(.*)',
        name: 'PAgeNotFound',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router