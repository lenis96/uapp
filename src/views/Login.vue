<template>
    <div class="flex flex-col grid-cols-12 h-screen">

  <div class="col-span-12">
     <Header/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  </div>
  <div class="grid grid-cols-12 flex-1">
      <div class="col-span-9">

      <h2>Imagen</h2>
      </div>
      <div class="col-span-3 bg-blue-300 flex flex-col justify-center">
<!-- <div> -->

<input v-model="username" class="mx-2 my-2 p-2 border border-indigo-600 " placeholder="username" type="text">
<input v-model="password" class="mx-2 my-2 p-2 border border-indigo-600 " placeholder="password" type="password">
<button v-on:click="login" class="text-white bg-blue-900 mx-2 my-2 py-2">LOGIN</button>  
<!-- </div> -->
      </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import router from '../router'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  components: {
      Header,Footer
  },
  data:function(){
    return {

      username:'admin',
      password:'123456',
    }
  },
  methods:{
    ...mapActions('cart', [
      'addProductToCart'
    ]),
    login:function(){
      console.log('login',this.username,this.password)
      this.$store.dispatch('users/authenticateUser',{username:this.username,password:this.password})
      setTimeout(()=>{
        console.log('NNNNNN2',this.token)
        this.$store.dispatch('asignatures/getAsignatures')

      },2000)
      // router.push('/profile/')
    }
  },
  computed: mapState({
    token: state => state.users
  }),
  created () {
    console.log('LALAL',this.token)
    console.log('ALAL',this.username,this.password)
      console.log('NNNNNN',this.token)
  }
}
</script>