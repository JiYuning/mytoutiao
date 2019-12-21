<template>
  <div class="login">
    <el-card class="box">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
        <hr>
      </div>
      <el-form ref="myForm" :model="loginFrom" :rules="loginReturn">
        <el-form-item prop="mobile">
          <el-input v-model="loginFrom.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginFrom.code" placeholder="请输入验证码" style="width:70%"></el-input>
          <el-button plain style="float:right">获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginFrom.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginFrom: {
        mobile: '',
        code: '',
        check: false
      },
      loginReturn: {
        mobile: [
          { required: true, message: '请输入你的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }
        ],
        code: [
          { required: true, message: '请输入你的验证码' },
          { pattern: /^\d{6}$/, message: '验证码不正确' }
        ],
        check: [{ validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请勾选'))
          }
        }
        }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((ok) => {
        if (ok) {
          this.$axios({
            url: '/authorizations',
            method: 'post',
            data: this.loginFrom
          }).then(res => {
            window.localStorage.setItem('user-token', res.data.data.token)
            this.$router.push('/home')
          }).catch(err => {
            console.log(err)
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    background-image: url('../../assets/img/4.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .box{
      width: 450px;
      height: 360px;
      .title{
        text-align: center;
        margin-bottom: 30px;
          img{
            height: 45px;
          }
      }
      .btn{
        width: 100%;
      }
    }
  }
</style>
