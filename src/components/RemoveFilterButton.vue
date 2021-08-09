<template>
    <div class='button' @click='removeFilter'>
        Remove filter
    </div>
</template>

<script>
    export default {
        name: 'RemoveFilterButton',
        methods: {
            removeFilter() {
                this.$store.commit('removeFilter');
            }
        },
    }
</script>

<style scoped>
    @import '../styles/Button.module.css';
</style>