<template>
  <el-row class="top" type="flex" align="middle">
    <el-col class="left" :span="12">
      <i class="el-icon-s-unfold"></i>
      <span>北京传智播客教育股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
      <el-row type="flex" justify="end" align="middle">
        <img src="../../assets/img/avatar.jpg" alt />
        <el-dropdown>
          <span class="el-dropdown-link" style="font-size:18px">
            九千万少女的梦!
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.top {
  height: 60px;
  .left {
    font-size: 20px;
  }
  .right {
    img {
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
