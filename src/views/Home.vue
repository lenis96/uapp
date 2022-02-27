<template>
<div class="flex flex-col grid-cols-12 h-screen">

  <div class="col-span-12">
     <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
  <div class="col-span-12 flex-1">
      <h2>Columna2</h2>
  </div>
  <Footer/>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Header,Footer
  }
}
</script>
