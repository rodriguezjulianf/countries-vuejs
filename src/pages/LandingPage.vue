<template>
    <div>
        <h1 class="title">Welcome to my countries SPA! (made with Vue.js)</h1>
        <h3 class='subTitle'>Here you can explore the world and learn more about every country!</h3>
        <img class="img" src='https://i.pinimg.com/originals/f5/1b/32/f51b32d7580d266e620e3580c2b274d8.gif'/>
        <link-button placeholder='Home' url='/countries'></link-button>
    </div>
</template>

<script>    
import LinkButton from '../components/LinkButton.vue'

    export default {
        name: 'LandingPage',
        components: { 'link-button': LinkButton },
    }
</script>

<style scoped>
.subTitle{
    padding: 20px 0 20px 0;
}
.img{
    padding-bottom: 20px;
}
</style>