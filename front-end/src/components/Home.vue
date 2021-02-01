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
            <span>
                <router-link to="/perfil" style="font-size: small; text-align: center">Alterar Usuário</router-link>
            </span>
        </span>

        <span slot="principal">
            <div class="card">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="https://materializecss.com/images/office.jpg">
                </div>
                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </span>
    </site>
</template>

<script>
import Site from "@/templates/Site";
import Grid from "./layouts/Grid";

export default {
    name: "Home",
    components: {Grid, Site},
    data() {
        return {
            usuario: false,
            urlProximaPagina: null,
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
}
</script>

<style scoped>

</style>
