<template>
    <site>
        <span slot="menuEsquerdo">
            <grid tamanho="4">
                <img :src="usuario.imagem" alt=""
                     class="circle responsive-img">
            </grid>
            <grid tamanho="8">
                <span class="black-text">
                    <h5>{{ usuario.name }}</h5>
                </span>
            </grid>
        </span>

        <span slot="principal">

            <h2>PERFIL</h2>

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
                            <i class="material-icons prefix">phone</i>
                            <input class="validate" id="telefone" type="text" v-mask="'(##) # ####-####'" v-model="telefone">
                            <label for="telefone" data-error="wrong" data-success="right">Telefone</label>
                        </grid>
                    </div>

                    <div class="file-field input-field">
                        <div class="btn green">
                            <i class="material-icons ">add_a_photo</i>
                            <span>Imagem</span>
                            <input type="file" v-on:change="upload">
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text">
                        </div>
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
                            <button class="btn waves-effect waves-light col s12" v-on:click="perfil()">
                                Atualizar
                            </button>
                        </grid>
                    </div>
                </grid>
            </div>
        </span>
    </site>
</template>

<script>
import Site from "@/templates/Site";
import Grid from "@/components/layouts/Grid";


import axios from "axios"

export default {
    name: "Perfil",
    data() {
        return {
            usuario: false,

            name: '',
            email: '',
            imagem: '',
            telefone: '',
            password: '',
            password_confirmation: '',
        }
    },
    created() {
        var self = this

        var aux = self.$store.getters.getUsuario
        if (aux) {
            self.usuario = self.$store.getters.getUsuario
            self.name = self.usuario.name
            self.email = self.usuario.email
            self.imagem = self.usuario.imagem
            self.telefone = self.usuario.telefone
            self.password = self.usuario.password
            self.password_confirmation = self.usuario.password_confirmation
        }
    },
    components: {Site, Grid},
    methods: {

        upload(event) {
            var self = this

            var file = event.target.files || event.dataTransfer.files;
            if (!file.length) {
                return
            }

            var reader = new FileReader()

            reader.onloadend = (event) => {
                self.imagem = event.target.result
            }
            reader.readAsDataURL(file[0])
        },

        perfil() {
            var self = this

            self.$http.put(self.$urlApi + 'perfil', {
                name: self.name,
                email: self.email,
                imagem: self.imagem,
                telefone: self.telefone,
                password: self.password,
                password_confirmation: self.password_confirmation,

            }, {"headers": {"authorization": "Bearer " + self.$store.getters.getToken}})
                .then(function (response) {
                    if (response.data.status) {
                        Swal.fire({
                            title: 'Deseja mesmo atualizar?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            cancelButtonText: 'Cancelar!',
                            confirmButtonText: 'Sim, Atualizar!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Atualização realizada com sucesso!!',
                                    showConfirmButton: false,
                                    timer: 1500,
                                })
                                self.usuario = response.data.usuario
                                self.$store.commit('setUsuario', response.data.usuario)
                                sessionStorage.setItem('usuario', JSON.stringify(self.usuario))
                            }
                        })

                    } else if (response.data.status == false && response.data.validacao) {
                        var erros = '';
                        for (var e of Object.values(response.data.erros)) {
                            erros += e + ' ';
                        }
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Erro: ' + erros,
                        })

                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Erro ao atualizar Usuário!',
                        })
                    }
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'ERRO, tente novamente mais tarde!',
                    })
                })
        },
    }
}
</script>

<style scoped>

</style>
