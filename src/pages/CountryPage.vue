<template>
    <div>
        <link-button placeholder='Back' url='/countries'></link-button>
        <CountryPageData :name='country.name' 
        :region='country.region' 
        :capital='country.capital' 
        :subRegion="country.subRegion" 
        :population="country.population" 
        :area="country.area"
        :flag="country.flag" 
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LinkButton from '../components/LinkButton.vue'
import CountryPageData from '../containers/CountryPageData.vue'
    export default {
        components: { 'link-button': LinkButton, CountryPageData},
        props: {
            alpha3Code: String,
        },
        computed: {
            ...mapGetters({country: 'getCurrentCountry'}),
        },
    }
</script>

<style scoped>

</style>