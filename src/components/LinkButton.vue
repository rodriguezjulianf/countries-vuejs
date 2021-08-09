<template>
    <div class='topButton' @click="redirect">
        {{placeholder}}
    </div>
</template>

<script>
    export default {
        name: 'LinkButton',
        props: {
            placeholder: String,
            url: String,
        },
        methods: {
            redirect() {
                if(this.url){
                    this.$router.push(this.url);
                }
            }
        },
    }
</script>

<style scoped>
    @import '../styles/Button.module.css';
</style>