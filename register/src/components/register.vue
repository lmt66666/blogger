<template>


  <div class="register-container">
        <h2 class="register-title">博客管理系统</h2>
 <a-form ref="form" :model="form" class="register-form">
     <h2 class="title">注册</h2>
    <a-form-item v-bind="formItemLayout" label="用户名" class="item1" >
      
      <a-input  class="inputBox"  v-model="username"
     
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout" label="密码" has-feedback  class="item1">
      <a-input-password   class="inputBox" v-model="password"
        
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback  class="item1">
      <a-input-password    class="inputBox" v-model="confirmPassword"
       
        type="password"
      
      />
    </a-form-item>

 



    <a-form-item v-bind="tailFormItemLayout"  class="item1">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        我已阅读此
        <a href="">
         协议
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout"  class="item1">
      <a-button type="primary" html-type="submit"  @click="onSubmit">
      注册
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>


import axios from 'axios';



export default {
  





  data() {
    return {
         
      username:'',
      password:'',
      confirmPassword:'',
     
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
     
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
   
      onSubmit(){
         if (this.password===this.confirmPassword){
           const formData={
             username:this.username,
             password:this.password
            
           }
           axios.post('http://zlxserver.cn.utools.club/signup/account',formData)
           .then(res=>{
             console.log(res)

           })
         }
           else{
             alert("两次密码不一致")
           }

         }

      }

};
</script>


<style>
.register-form {
  width: 700px;
  height: 400px;
  margin: 0 auto;
  display: inline-block;
  border-radius:30px;
  -webkit-box-shadow: 1px 0px 15px #696969;
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0 !important;
}

/* 背景 */
.register-container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background: url("../assets/bg1.jpg") no-repeat;
   background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
}
.item1{
      width: 550px;
      height: 30px;
   position: relative;
   top: 20px;
   left: -12px;
}

/* Log */
.register-title {
  color: #fff;
  text-align: center;
  margin: 80px 0;
  font-size: 48px;
  font-family: Microsoft Yahei;
}
/* 登陆按钮 */
.submit{
  width: 100%;
  height: 45px;
  font-size: 16px;
}
/* 用户登陆标题 */
.title{
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}
/* 输入框 */
.inputBox{
  height: 30px;
}
/* 输入框内左边距50px */
.ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 50px;
}
</style>