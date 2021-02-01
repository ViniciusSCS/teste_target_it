import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Login from "@/pages/login/Login";
import Cadastro from "@/templates/Cadastro";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component:  Home,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: Cadastro
        },
    ]
})
