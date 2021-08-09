<template>
    <div>
        <h2 class="text">
            This single page application was made by <a class='hyperlink' @click='redirect'>Julian Federico Rodriguez</a> with enthusiasm for Sebastián Sampaoli.
        </h2>
        <link-button placeholder='Back' url='/countries'></link-button>
    </div>
</template>

<script>
import LinkButton from '../components/LinkButton.vue'
    export default {
        name: 'AboutPage',
        components: { 'link-button': LinkButton },
        methods: {
            redirect() {
                window.open('https://www.linkedin.com/in/julian-f-rodriguez/')
            }
        },
    }
</script>

<style scoped>
.text {
    margin-bottom: 30px;
}
.hyperlink{
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}
</style>