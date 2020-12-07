<template>
  <div class="login-container">
        <h2 class="login-title">博客管理系统</h2>
         <h2 class="title">登录 </h2>
  <a-form 
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
  


 
  </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    register: function() {
      this.$router.push({ path: "/register" });
       }
  },
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.login-title {
  color: #fff;
  text-align: center;
  margin: 80px 0;
  font-size: 48px;
  font-family: Microsoft Yahei;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background: url("../assets/bg1.jpg") no-repeat;
   background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}


.login-form {
  width: 700px;
  height: 400px;
  margin: 0 auto;
  display: inline-block;
  border-radius:30px;
  -webkit-box-shadow: 1px 0px 15px #696969;
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0 !important;
}

.title{
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}

.item{
      height: 30px;
}

.remeber{
    float: left;
}
.forgot{
    float: right;
}


</style>