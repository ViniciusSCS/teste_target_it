<template>
    <nav :class="cor">
        <div class="nav-wrapper container">
            <router-link :to="url || '/'" class="brand-logo" >{{ $store.getters.getTitulo }}</router-link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <slot/>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: [
        'logo',
        'url',
        'cor'
    ],
    data() {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
