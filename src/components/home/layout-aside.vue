<template>
  <div class="aside">
    <div class="left">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu
      class="list"
      router
      background-color="#323745"
      text-color="#adafb5"
      active-text-color=" #ffd04b"
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/picture">图文数据</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fanspicture">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/userinfo">账户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.aside {
  .el-menu {
    border: none;
  }
  .left {
    background-color: #2e2f32;
    text-align: center;
    img {
      height: 40px;
      margin: 15px 0;
    }
  }
}
</style>
