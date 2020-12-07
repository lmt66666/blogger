<template> 

<div>
<router-Vue>
  <login></login>

</router-Vue>


</div>



</template>

<script>
// import hello from './components/HelloWorld.vue'
import login from './components/login.vue'

// import register from './components/register'

export default {
 
  data(){
    return {
      page:'login'
    }
  },
  components:{
    login,
    // register
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
