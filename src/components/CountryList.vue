<template>
    <div>
        <span class='filterButtons'>
            <FilterDropdown />
            <RemoveFilterButton />
            <SortButton placeholder='name'/>
            <SortButton placeholder='population'/>
        </span>
        <section class='pageButtonsAndMapWrapper'>
            <span class='pageButtons'>
                <PageButton placeholder="Prev"/>
                <PageButton placeholder="Next"/>
            </span>
            <span class='countryMap'>
                <CountryCard v-for="country in countries" 
                :key="country.alpha3Code" 
                :name="country.name" 
                :region="country.region" 
                :flag="country.flag" 
                :alpha3Code="country.alpha3Code"/>
            </span>
            <span class='pageButtons'>
                <PageButton placeholder="Prev"/>
                <PageButton placeholder="Next"/>
            </span>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CountryCard from '../containers/CountryCard.vue'
import PageButton from './PageButton.vue'
import FilterDropdown from './FilterDropdown.vue'
import RemoveFilterButton from './RemoveFilterButton.vue'
import SortButton from './SortButton.vue'

export default {
    name: 'CountryList',
    components: { CountryCard, PageButton, FilterDropdown, RemoveFilterButton, SortButton },
    computed: {
        ...mapGetters({countries: 'getCountriesByPage'})
    }
}
</script>

<style scoped>
.countryMap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.pageButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px;
}
.pageButtonsAndMapWrapper {
  margin: 0 5% 25px 5%;
  border-radius: 5px;
  background-color: grey;
  /* border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px; */
}
.filterButtons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 20px;
  background-color: grey;
  border-radius: 5px;
  margin: 25px 15% 25px 15%;
}
</style>