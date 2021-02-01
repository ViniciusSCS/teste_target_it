<template>
    <span>
        <header>
            <nav-bar cor="nav-wrapper"
                     url="/">
                <li><router-link to="/">HOME</router-link></li>
                <li v-if="!usuario"><router-link class="grey-text text-lighten-3" to="/login">LOGIN</router-link></li>
                <li v-if="!usuario"><router-link class="grey-text text-lighten-3" to="/cadastro">CADASTRO</router-link></li>
                <li v-if="usuario"><router-link to="/perfil">{{ usuario.name }}</router-link></li>
                <li v-if="usuario"><a v-on:click="sair()">Sair</a></li>
            </nav-bar>
        </header>

        <main>
            <div class="container">
                <div class="row">
                    <grid tamanho="4">
                        <card-menu>
                            <div class="row valign-wrapper">
                                <slot name="menuEsquerdo"/>
                            </div>
                        </card-menu>
                    </grid>

                    <grid tamanho="8">
                        <slot name="principal"/>
                    </grid>
                </div>
            </div>
        </main>

        <rodape cor="nav-wrapper"
                titulo="Component Footer"
                descricao="Teste técnico para vaga de desenvolvimento"
                copyrigth="© Vinicius Sarmento - Target.IT 2021">
            <ul>
                  <li><router-link class="grey-text text-lighten-3" to="/">Home</router-link></li>
                  <li ><router-link class="grey-text text-lighten-3" to="/login">Login</router-link></li>
                  <li ><router-link class="grey-text text-lighten-3" to="/cadastro">Cadastro</router-link></li>
            </ul>
        </rodape>

    </span>
</template>

<script>

import Grid from "../components/layouts/Grid";
import NavBar from "../components/layouts/NavBar";
import Rodape from "../components/layouts/Rodape";
import CardMenu from "../components/layouts/CardMenu";
export default {
    name: "Site",
    components: {NavBar, CardMenu, Grid, Rodape},
    data() {
        return {
            usuario: false,
        }
    },
    created() {
        var self = this

        var aux = self.$store.getters.getUsuario
        if (aux) {
            self.usuario = self.$store.getters.getUsuario
        } else {
            self.$router.push('/login')
        }
    },
    methods:{
        sair() {
            var self = this

            self.$store.commit('setUsuario', null)
            sessionStorage.clear()
            self.usuario = false
            self.$router.push('/login')
        },
    }
}
</script>

<style scoped>
</style>
