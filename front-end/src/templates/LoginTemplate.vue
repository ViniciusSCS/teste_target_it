<template>
    <span>
        <header>
                <nav-bar cor="nav-wrapper"
                         logo="Sistema SPA"
                         url="http://engenheirocompvinicius.com.br">
                    <li v-if="usuario"><router-link to="/perfil">Vinicius</router-link></li>
                    <li v-if="usuario"><a>Sair</a></li>
                </nav-bar>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <grid tamanho="8">
                        <card-menu>
                            <slot name="menuEsquerdo"/>
                        </card-menu>
                    </grid>

                    <grid tamanho="4">
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
                  <li><router-link class="grey-text text-lighten-3" to="/login">Login</router-link></li>
                  <li><router-link class="grey-text text-lighten-3"
                                                   to="/cadastro">Cadastro</router-link></li>
            </ul>
        </rodape>
    </span>

</template>

<script>
import Site from "./Site";
import Grid from "../components/layouts/Grid";
import Rodape from "../components/layouts/Rodape";
import NavBar from "../components/layouts/NavBar";
import CardMenu from "../components/layouts/CardMenu";

export default {
    name: "LoginTemplate",
    data() {
        return {
            usuario: false,
        }
    },
    components: {NavBar, Grid, Rodape, Site, CardMenu},
    created() {},
    methods: {}
}
</script>

<style scoped>

</style>
