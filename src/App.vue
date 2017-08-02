<template>
    <div>
      <div class="heading-center">
        <h2 class="section-heading">ABOUT US</h2>
        <img src="assets/img/logo/repute-logo-nav-slategray.png">
        <p class="lead">Getting to know us better</p>
        <hr>
      </div>
      <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
