<template>
  <div>
    
    <Navigation></Navigation>
    
    <About></About>
    
    <DLHHeader></DLHHeader>
    

    <div class="heading-center">
      <h2 class="section-heading">ABOUT US</h2>
      <img src="assets/img/logo/repute-logo-nav-slategray.png">
      <p class="lead">Getting to know us better</p>
      <hr>
    </div>

    <p>{{ msg }}</p>
    
    <Testimonials></Testimonials>

    <Pricing></Pricing>

    <Portfolio></Portfolio>

  </div>
</template>

<script>

import Navigation from './components/dlh-navigation.vue'
import Portfolio from './components/dlh-portfolio.vue'
import Pricing from './components/dlh-pricing.vue'
import DLHHeader from './components/dlh-header.vue'
import About from './components/dlh-about.vue'
import Testimonials from './components/dlh-testimonials.vue'
import Services from './components/dlh-services.vue'

export default {
  name: 'app',
  components: { Navigation, Pricing, Portfolio, DLHHeader, About, Testimonials, Services },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss"></style>