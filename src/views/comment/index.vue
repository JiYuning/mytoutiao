<template>
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <template slot="title">评论管理</template>
    </bread-crumb>
    <el-table :data="list">
      <el-table-column prop="title" label="标题" width="600"></el-table-column>
      <el-table-column prop="comment_status" :formatter="formatterBoolean" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">
          <el-button type="text">修改</el-button>
          <!-- 根据状态判断关闭还是打开 -->
          <el-button
            @click="openOrCloseState(obj.row)"
            type="text"
          >{{obj.row.comment_status?'关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type="flex" justify="center" align="middle" style="height:60px">
      <!-- 分页组件   total：总页码 page-size:每页多少条 -->
    <el-pagination
    :page-size="page.pageSize"
    :current-page="page.currentPage"
    :pager-count="11"
    layout="prev, pager, next"
    :total="page.total"
    @current-change="changePage"
    ></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      loading: false, // 默认不打开进度条
      page: {// 专门存放分页信息数据
        total: 0,
        pageSize: 10, // 默认没也条数为10
        currentPage: 1// 默认页码为1
      }

    }
  },
  methods: {
    changePage (newPage) { // 页码改变事件
      this.page.currentPage = newPage// 最新页码
      this.getComment()
    },
    getComment () {
      this.loading = true// 打开进度条
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
        this.loading = false// 关闭进度条
        // setTimeout(() => { this.loading = false }, 3000)// 设置关闭进度条时间
      })
    },
    // 定义一个格式化的函数
    formatterBoolean (row, column, cellValue, index) {
      // row : 当前行数据
      // column : 当前列信息
      // cellValue : 当前单元格的值
      // index : 索引
      return cellValue ? '正常' : '关闭'
    },
    openOrCloseState (row) {
      // 直接调用接口
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`确认${mess}评论吗？`, '提示').then(() => {
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: {
            allow_comment: !row.comment_status
          }
        })
          .then(res => {
            // 表示执行成功
            this.getComment() // 重新拉取评论管理数据
          })
          .catch(() => {
            // 执行失败
          })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
