import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: () =>
            import ('../views/Sobre.vue')
    },
    {
        path: '/Playlists',
        name: 'Playlists',
        component: () =>
            import ('../views/Playlists.vue')
    },
    {
        path: '/contas',
        name: 'Trocar Contas',
        component: () =>
            import ('../views/Contas.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router