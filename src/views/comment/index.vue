<template>
  <el-card>
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
          <el-button @click="openOrCloseState(obj.row)" type="text">{{obj.row.comment_status?'关闭' : '打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getComment () {
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment' }
      }).then(result => {
        this.list = result.data.results
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
          params: { articles_id: row.id },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(res => {
          this.getComment()// 重新拉取评论管理数据
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
