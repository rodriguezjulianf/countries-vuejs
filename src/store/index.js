import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const url = "https://restcountries.eu/rest/v2/all";
const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    countries: [],
    filteredCountries: [],
    currentCountry: [],
    page: 0,
  },
  mutations: {
    //sync
    setCountries(state, payload) {
      payload.forEach(country => state.countries.push(country));
    },
    changePage(state, payload) {
      const page = state.page === 0 ? 1 : state.page
      if (state.page === 0 && payload === false){return window.alert('You are on the first page!')}
      if (state.filteredCountries[0] && payload === true && page * 10 > state.filteredCountries.length) {
        return window.alert('You are on the last page!')
      }
      if (state.page === 24 && payload === true){return window.alert('You are on the last page!')}
      else payload ? state.page++ : state.page--
    },
    filterByRegion(state, payload) {
      state.page = 0;
      state.filteredCountries = state.countries.filter(
        (country) => country.region === payload
      );
    },
    sortByPopulation(state) {
      var arr = [];
      if (state.filteredCountries[0]?.population < state.filteredCountries[2]?.population) {        
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort((a, b) => b.population - a.population);
        }
      } else {
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort((a, b) => a.population - b.population);
        } else {
          arr = [...state.countries];
          state.filteredCountries = arr.sort((a, b) => a.population - b.population);
        }
      }
      state.page = 0;
    },
    sortByAlphabetically(state) {
      var arr = [];
      if (state.filteredCountries[0]?.name < state.filteredCountries[2]?.name) {
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort((a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0);
        }
      } else {
        if (state.filteredCountries[0]) {
          arr = [...state.filteredCountries];
          state.filteredCountries = arr.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        } else {
          arr = [...state.countries];
          state.filteredCountries = arr.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        }
      }
      state.page = 0;
    },
    removeFilter(state) {
      if(state.filteredCountries[0]) {
        state.filteredCountries = [];
        state.page = 0;
      }
    },
    searchCountries(state, payload) {
      const regex = new RegExp (payload, 'i')
      if(state.filteredCountries[0]) {
        state.filteredCountries = state.filteredCountries.filter(country => country.name.match(regex));
      } else {
        state.filteredCountries = state.countries.filter(country => country.name.match(regex));
      }
      state.page = 0;
    },
    setCurrentCountry(state, payload) {
      state.currentCountry = state.countries.filter(country => country.alpha3Code === payload);
    }
  },
  actions: {
    //async
    async fetchCountries(state) {
      const response = await fetch(url, { headers });
      const countries = await response.json();
      state.commit("setCountries", countries);
    },
  },
  modules: {},
  getters: {
    getAllCountries: state => state.countries,
    getCountriesByPage: state =>  state.filteredCountries[0] ? state.filteredCountries.slice(
      state.page * 10,
      (state.page + 1) * 10
    ): state.countries.slice(
      state.page * 10,
      (state.page + 1) * 10
    ),
    getCurrentCountry: state => state.currentCountry[0] ? state.currentCountry[0] : window.alert('Error reaching site'),
  }
});