<template>
    <div class='button' @click='changePage'>
        {{placeholder}}
    </div>
</template>

<script>
    export default {
        name: 'PageButton',
        props: {placeholder:String},
        methods: {
            changePage() {
                this.placeholder === 'Next' ?
                this.$store.commit('changePage', true) : this.$store.commit('changePage', false)
            },
        },
    }
</script>

<style scoped>
    @import '../styles/Button.module.css';
</style>