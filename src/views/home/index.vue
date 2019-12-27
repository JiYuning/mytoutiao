<template>
  <div>
    <el-container>
      <!-- 左侧 -->
      <el-aside class="abc">
        <layout-aside></layout-aside>
      </el-aside>

      <!-- 右侧 -->
      <el-container>
        <el-header>
          <layout-top></layout-top>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.abc{
  min-height:100vh;
  background-color:#323745
}
</style>
