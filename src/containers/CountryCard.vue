<template>
    <div class='countryCard' @click="redirect">
      <span class='cardText'>
        <span class='countryName'>{{ name }}</span>
        <span class='countryRegion'>{{ region }}</span>
      </span>
      <img
        class='countryFlag'
        :src="flag"
        alt=''
      />
    </div>
</template> 

<script>
    export default {
        name: 'CountryCard',
        props: {
            name: String,
            region: String,
            flag: String,
            alpha3Code: String,
        },
        methods: {
            redirect() {
              this.$store.commit('setCurrentCountry', this.alpha3Code)
              this.$router.push(`/countries/${this.alpha3Code}`);
            }
        },
    }
</script>

<style scoped>
.countryCard {
  display: flex;
  flex-direction: column;
  background-color: rgba(36, 36, 36, 0.767);
  margin: 10px 10px;
  height: 300px;
  width: 510px;
  box-shadow: 5px 10px black;
  color: white;
  cursor: pointer;
}
.cardText {
  text-shadow: 2px 2px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  margin: 0px;
}
.countryName {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
}
.countryRegion {
  font-size: 25px;
}
.countryFlag {
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: 5px;
  max-width: 400px;
  max-height: 220px;
}
</style>