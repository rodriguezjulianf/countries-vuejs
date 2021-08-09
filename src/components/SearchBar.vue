<template>
    <form>
      <input
        class='searchBar'
        type="text" 
        ref='searchBarInput'
        placeholder="Search a country..."
        autoComplete="off"
      />
      <button class='button' type="submit" @click.prevent='searchCountries'>
        Search
      </button>
    </form>
</template>

<script>
    export default {
        name: 'SearchBar',
        methods: {
            searchCountries() {
                console.log(this.$refs.searchBarInput.value)
                this.$store.commit('searchCountries', this.$refs.searchBarInput.value);
            }
        },
    }
</script>

<style scoped>
    @import '../styles/Button.module.css';
.searchBar {
  position: relative;
  top: -1px;
  padding: 15px;
  border-color: #04aa6d;
}
.activityForm {
  padding:5% 5% 5% 5%;
  margin: 5% 5% 5% 5%;
  background-color: rgb(53, 53, 53);
  border-radius: 5px;
  box-shadow: 6px 10px black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  margin-top: 50px;
}
.inputs {
  color: white;
  text-shadow: 1px 1px #000000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.submit {
  margin-top: 50px;
}
.submit:hover {
  background-color: #3e8e41;
}
.selectedCountries {
  margin: black;
}
</style>