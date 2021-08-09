<template>
    <div class='dropdown'>
        <div class='dropdownCover'>Filter by</div>
        <div class='dropdownContent'>            
        <a @click='filterByAfrica'>Africa</a>
        <a @click='filterByAmericas'>Americas</a>
        <a @click='filterByAsia'>Asia</a>
        <a @click='filterByEurope'>Europe</a>
        <a @click='filterByOceania'>Oceania</a>
        <a @click='filterByPolar'>Polar</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterDropdown',
        methods: {
            filterByAfrica() {
                this.$store.commit('filterByRegion', 'Africa')
            },
            filterByAmericas() {
                this.$store.commit('filterByRegion', 'Americas')
            },
            filterByAsia() {
                this.$store.commit('filterByRegion', 'Asia')
            },
            filterByEurope() {
                this.$store.commit('filterByRegion', 'Europe')
            },
            filterByOceania() {
                this.$store.commit('filterByRegion', 'Oceania')
            },
            filterByPolar() {
                this.$store.commit('filterByRegion', 'Polar')
            },
        },
    }
</script>

<style>
    @import '../styles/Button.module.css';
</style>