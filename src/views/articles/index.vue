<template>
  <el-card>
      <!-- 头部信息 -->
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>

    <!-- 选择状态 -->
    <el-form style="padding-left:50px">
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 选择频道 -->
      <el-form-item label="频道列表:">
        <el-select placeholder="请选择频道" v-model="searchForm.channels_id">
            <!-- el-option  label是显示值   value是存储值 -->
          <el-option
            v-for="item in channels"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 时间 -->
      <el-form-item label="时间选择:">
        <el-date-picker
          v-model="searchForm.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>

      <!-- 主体内容 -->
    </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchForm: {
        status: 5, // 默认选中全部选项
        channels_id: null, // 默认不选中任何分类
        dateRange: []// 日期范围
      },
      channels: [] // 接收频道数据
    }
  },
  methods: {
    // 获取所有的频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    }
  },
  created () {
    this.getChannels()// 获取文章数据
  }
}
</script>

<style>
</style>
