<template>


  <div class="login-container">
        <h2 class="login-title">博客管理系统</h2>
 <a-form ref="form" :model="form" class="login-form">
     <h2 class="title">注册</h2>
    <a-form-item v-bind="formItemLayout" label="用户名" class="item" >
      
      <a-input  class="inputBox"
        v-decorator="[
          '用户名',
          {
            rules: [{ required: true, message: '请输入你的用户名', whitespace: true }],
          },
        ]"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="密码" has-feedback  class="item">
      <a-input-password   class="inputBox"
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: '请输入你的密码',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback  class="item">
      <a-input-password    class="inputBox"
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: '请确认你的密码',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
      />
    </a-form-item>

 



    <a-form-item v-bind="tailFormItemLayout"  class="item">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        我已阅读此
        <a href="">
         协议
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item v-bind="tailFormItemLayout"  class="item">
      <a-button type="primary" html-type="submit">
      注册
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

export default {
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
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
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.autoCompleteResult = autoCompleteResult;
    },
  },
};
</script>


<style>
.login-form {
  width: 700px;
  height: 400px;
  margin: 0 auto;
  display: inline-block;
  border-radius:30px;
  -webkit-box-shadow: 1px 0px 15px #696969;
  background: rgba(255, 255, 255, 0.5) none repeat scroll 0 0 !important;
}

/* 背景 */
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
.item{
      width: 550px;
      height: 30px;
      display: inline-block;
}

/* Log */
.login-title {
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