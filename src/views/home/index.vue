<template>
  <div>
    <el-container>
      <!-- 左侧 -->
      <el-aside>
        <layout-aside style="min-height:100vh;background-color:#323745"></layout-aside>
      </el-aside>

      <!-- 右侧 -->
      <el-container>
        <el-header>
          <layout-top></layout-top>
        </el-header>
        <el-main>主体区域</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutTop from '../../components/home/layout-top'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-top': layoutTop
  }
}
</script>

<style lang="less" scoped>
</style>
