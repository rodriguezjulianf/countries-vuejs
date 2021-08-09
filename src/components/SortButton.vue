<template>
    <div class='button' @click='sortBy'>Sort by {{placeholder}}</div>
</template>

<script>
    export default {
        name: 'SortButton',
        props: {
            placeholder: String,
        },
        methods: {
            sortBy() {
                this.placeholder === 'population' 
                ? this.$store.commit('sortByPopulation') 
                : this.$store.commit('sortByAlphabetically');
            },
        },
    }
</script>

<style scoped>
    @import '../styles/Button.module.css';
</style>