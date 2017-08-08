<template>
  <div>
    
    <Navigation></Navigation>
    
    <DLHHeader></DLHHeader>

    <About></About>

    <Services></Services>
    
    <!--
    <Testimonials></Testimonials>
    <Pricing></Pricing>
    <Portfolio></Portfolio>
    -->
    <Contact></Contact>

    <DLHFooter></DLHFooter>

    <BackToTop></BackToTop>

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
import DLHFooter from './components/dlh-footer.vue'
import Contact from './components/dlh-contact.vue'
import BackToTop from './components/dlh-back-to-top.vue'

export default {
  name: 'app',
  components: { Navigation, Pricing, Portfolio, DLHHeader, About, Testimonials, Services, DLHFooter, Contact, BackToTop },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss"></style>