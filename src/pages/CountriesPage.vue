<template>
    <div>
        <h1>Here's information for all the countries in the world!</h1>
        <div class="buttonContainer">
            <LinkButton placeholder='Back' url='/' />
            <LinkButton placeholder='About' url='/about' />
        </div>
        <h2>Try searching yours!</h2>
        <SearchBar />
        <CountryList />
    </div>
</template>

<script>
import CountryList from '../components/CountryList.vue'
import LinkButton from '../components/LinkButton.vue'
import SearchBar from '../components/SearchBar.vue'

    export default {
        name: 'CountriesPage',
        components: { CountryList, LinkButton, SearchBar }
    }
</script>

<style scoped>
.buttonContainer {
    display: flex;
    align-content: space-between;
}
</style>