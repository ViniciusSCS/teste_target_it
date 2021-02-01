<template>

    <login-template>
        <span slot="menuEsquerdo">
            <ul>
                  <img src="@/assets/logo.png" alt="" style="" class="displayed responsive-img">
            </ul>
        </span>

        <span slot="principal">
            <div id="login-page" class="row">
                <grid class="z-depth-6 card-panel" tamanho="12">
                    <div class="row">
                        <grid class="input-field" tamanho="12">
                            <i class="material-icons prefix">people_outline</i>
                            <input class="validate" id="nome" type="text" v-model="name">
                            <label for="nome" data-error="wrong" data-success="right">Nome</label>
                        </grid>
                    </div>

                    <div class="row">
                        <grid class="input-field" tamanho="12">
                            <i class="material-icons prefix">mail_outline</i>
                            <input class="validate" id="email" type="email" v-model="email">
                            <label for="email" data-error="wrong" data-success="right">E-mail</label>
                        </grid>
                    </div>

                    <div class="row">
                        <grid class="input-field" tamanho="12">
                            <i class="material-icons prefix">lock_outline</i>
                            <input id="password" type="password" v-model="password">
                            <label for="password">Senha</label>
                        </grid>
                    </div>

                    <div class="row">
                        <grid class="input-field" tamanho="12">
                            <i class="material-icons prefix">lock_outline</i>
                            <input id="confirmar_senha" type="password" v-model="password_confirmation">
                            <label for="confirmar_senha">Confirme sua Senha</label>
                        </grid>
                    </div>

                    <div class="row">
                        <grid class="input-field" tamanho="12">
                            <button class="btn waves-effect waves-light col s12" v-on:click="cadastro()">Salvar</button>
                        </grid>
                    </div>

                    <div class="row">
                        <grid class="input-field" tamanho="6 m6 l6">
                            <p class="margin medium-small">
                                <router-link class="btn waves-effect waves-light blue"
                                             to="/login">Já possui conta</router-link>
                            </p>
                        </grid>
                    </div>
                </grid>
            </div>
        </span>
    </login-template>

</template>

<script>
import Grid from "@/components/layouts/Grid";
import LoginTemplate from "./LoginTemplate";

export default {
    name: "Cadastro",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    },
    components: {LoginTemplate, Grid},
    methods: {}
}
</script>

<style scoped>

</style>
