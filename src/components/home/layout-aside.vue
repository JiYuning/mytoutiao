<template>
  <div class="aside">
      <div class="left">
    <img src="../../assets/img/logo_admin.png" alt />
      </div>
    <el-menu class="list" background-color="#323745" text-color="#adafb5" active-text-color=" #ffd04b">
      <el-menu-item>首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span>内容管理</span>
        </template>
        <el-menu-item>发布文章</el-menu-item>
        <el-menu-item>内容列表</el-menu-item>
        <el-menu-item>评论列表</el-menu-item>
        <el-menu-item>素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span>粉丝管理</span>
        </template>
        <el-menu-item>图文数据</el-menu-item>
        <el-menu-item>粉丝概况</el-menu-item>
        <el-menu-item>粉丝画像</el-menu-item>
        <el-menu-item>粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item>账户信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.aside{
    .el-menu{
        border: none;
    }
    .left{
        background-color: #2e2f32;
        text-align: center;
        img{
            height: 40px;
            margin: 15px 0;
        }
    }
}
</style>
