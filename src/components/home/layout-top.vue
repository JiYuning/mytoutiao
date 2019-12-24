<template>
  <el-row class="top" type="flex" align="middle">
    <el-col class="left" :span="12">
      <i class="el-icon-s-unfold"></i>
      <span>北京传智播客教育股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
        <img :src="userINfo.photo ? userINfo.photo : defaultImg" alt="">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{userINfo.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git 地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userINfo: {},
      defaultImg: require('../../assets/img/4.jpg')
    }
  },
  created () {
    let token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      this.userINfo = res.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.top {
  height: 60px;
  .left {
    font-size: 20px;
  }
  .right {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
