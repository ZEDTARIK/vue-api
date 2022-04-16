import { createRouter, createWebHistory } from 'vue-router'
import EventView from '../views/EventView.vue'
import About from '../views/AboutView.vue'
import EventDetail from '../components/Events/Detail.vue'
import EventEdit from '../components/Events/Edit.vue'
import EventRegister from '../components/Events/Register.vue'
import EventLayout from '../components/Events/Layout.vue'

import PageNotFound from '../views/PageNotFound.vue'

const routes = [{
        path: '/',
        redirect: '/events'
    },
    {
        path: '/about-us',
        name: 'About',
        component: About,
        alias: '/about'
    },
    {

        path: '/events',
        name: 'Events',
        component: EventView,
        props: route => ({ page: parseInt(route.query.page) || 1 })
    },
    {
        path: '/events/:id',
        name: 'EventDetail',
        props: true,
        component: EventLayout,
        name: 'EventLayout',
        children: [{
                path: '',
                name: 'EventDetail',
                component: EventDetail
            },
            {

                path: 'Register',
                name: 'EventRegister',
                component: EventRegister
            },
            {
                path: 'edit',
                name: 'EventEdit',
                component: EventEdit
            },
        ]
    },

    {
        path: '/event/:afterEvent(.*)',
        redirect: to => {
            return {
                path: '/events/' + to.params.afterEvent
            }
        }
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