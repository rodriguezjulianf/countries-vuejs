<template>
    <div class='countryPage'>
        <h1 class='countryName'>{{ name }}</h1>
        <div class='countryData'>
            <div class='countryTextData'>
                <span>Region: {{ region }}</span>
                <span>Capital: {{ capital }}</span>
                <span>Subregion: {{ subRegion }}</span>
                <span>Population: {{ population }}</span>
                <span>Area: {{ area }} km²</span>
            </div>
            <img
            :src='flag'
            alt='flag'
            class='countryFlag'
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CountryPageData',
        props: {
            name: String,
            region: String,
            capital: String,
            subRegion: String,
            population: String,
            area: String,
            flag: String,
        },
        mounted () {
            console.log(this.name)
        },
    }
</script>

<style scoped>
.countryPage {
  margin: 0 5% 5% 5%;
  background-color: rgb(53, 53, 53);
  border-radius: 5px;
  box-shadow: 6px 10px black;
}
.countryName {
  text-align: center;
  font-size: 55px;
  color: white;
  text-shadow: 2px 2px #000000;
  padding-top: 30px;
}
.countryData {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: 2px 2px #000000;
}
.countryTextData {
  font-size: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.countryFlag {
  margin-top: 50px;
  max-width: 600px;
  max-height: 620px;
  margin-bottom: 50px;
}
</style>