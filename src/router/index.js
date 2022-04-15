import { createRouter, createWebHistory } from 'vue-router'
import EventView from '../views/EventView.vue'
import EventDetail from '../components/Events/EventDetail.vue'

const routes = [{
        path: '/',
        redirect: '/events'
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {

        path: '/events',
        name: 'EventView',
        component: EventView
    },
    {
        path: '/events/:id',
        name: 'EventDetail',
        props: true,
        component: EventDetail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router