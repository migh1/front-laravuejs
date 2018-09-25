import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import CadastroPage from '@/pages/cadastro/CadastroPage'
import PerfilPage from '@/pages/perfil/PerfilPage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: CadastroPage
        },
        {
            path: '/perfil',
            name: 'Perfil',
            component: PerfilPage
        }
    ]
})
