<template>
  <div>
<div class="hello">
  <pre>{{content}}</pre>
</div>
</div>
</template>

<script>

import axios from 'axios';      


export default { 
  name: 'HelloWorld',
  data(){
    return{
    content:""
  }
},
  mounted() {
    axios.post("http://zlxserver.cn.utools.club/signup/account").then(body=>{
     this.content=body.data;
});
}
}

</script>

<style scoped>

</style>
