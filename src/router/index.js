import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import CountriesPage from '../pages/CountriesPage.vue'
import CountryPage from '../pages/CountryPage.vue'
import AboutPage from '../pages/AboutPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage  
    },
    {
        path: '/countries',
        name: 'CountriesPage',
        component: CountriesPage
    },
    {
        path: '/countries/:alpha3Code',
        name: 'CountryPage',
        props: true,
        component: CountryPage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    }
  ]
})