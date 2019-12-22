<template>
  <div>
    <el-container>
      <!-- 左侧 -->
      <el-aside>
        <layout-aside style="min-height:100vh;background-color:#323745"></layout-aside>
      </el-aside>

      <!-- 右侧 -->
      <el-container>
        <el-header>头部导航</el-header>
        <el-main>主体区域</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
}
</script>

<style lang="less" scoped>
</style>
