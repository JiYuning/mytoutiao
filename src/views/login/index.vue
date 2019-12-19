<template>
  <div class="login">
    <el-card class="box">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
        <hr>
      </div>
      <el-form>
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input placeholder="请输入验证码" style="width:70%"></el-input>
          <el-button plain style="float:right">朴素按钮</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox>我已阅读并同意无条件被坑</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

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
