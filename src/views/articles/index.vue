<template>
  <el-card class="articles">
    <!-- 头部信息 -->
    <bread-crumb slot="header">
      <template slot="title">文章列表</template>
    </bread-crumb>

    <!-- 选择状态 -->
    <el-form style="padding-left:50px">
      <el-form-item label="文章状态:">
        <el-radio-group v-model="searchForm.status" @change="changCondition">
          <el-radio :label="5">全部</el-radio>
          <el-radio :label="0">草稿</el-radio>
          <el-radio :label="1">待审核</el-radio>
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核失败</el-radio>
        </el-radio-group>
      </el-form-item>

      <!-- 选择频道 -->
      <el-form-item label="频道列表:">
        <el-select placeholder="请选择频道" v-model="searchForm.channels_id" @change="changCondition">
          <!-- el-option  label是显示值   value是存储值 -->
          <el-option v-for="item in channels" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <!-- 时间 -->
      <el-form-item label="时间选择:">
        <el-date-picker
          @change="changCondition"
          value-format="yyyy-MM-dd"
          v-model="searchForm.dateRange"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
    </el-form>
    <!-- 主体内容 -->

    <el-row type="flex" align="middle" class="total">
      <span>共找到1000条符合条件的内容</span>
    </el-row>
    <div v-for="item in list" :key="item.id.string" class="article-item">
      <div class="left">
        <img :src="item.cover.images.length?item.cover.images[0]:defaultImg" alt />
        <div class="info">
          <span>{{item.title}}</span>
          <el-tag class="tag" :type="item.status|filterType">{{ item.status | filterStatus}}</el-tag>
          <span class="date">{{item.pubdate}}</span>
        </div>
      </div>
      <div class="right">
        <span>
          <i class="el-icon-edit"></i>修改
        </span>
        <span>
          <i class="el-icon-delete"></i>删除
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
// import { filter } from 'minimatch'

export default {
  data () {
    return {
      searchForm: {
        status: 5, // 默认选中全部选项
        channels_id: null, // 默认不选中任何分类
        dateRange: [] // 日期范围
      },
      channels: [], // 接收频道数据,
      list: [],
      defaultImg: require('../../assets/img/4.jpg') // 默认图片
    }
  },
  filters: {
    filterStatus (value) {
      switch (value) {
        case 0:
          return '草稿'
        case 1:
          return '待审核'
        case 2:
          return '已发表'
        case 3:
          return '审核失败'
        default:
          break
      }
    },
    filterType (value) {
      switch (value) {
        case 0:
          return 'warning'
        case 1:
          return 'info'
        case 2:
          return ''
        case 3:
          return 'danger'
        default:
          break
      }
    }
  },
  methods: {
    changCondition () {
      // 改变条件
      let params = {
        status: this.searchForm.status === 5 ? null : this.searchForm.status, // 因为5是自己定义的一个标识，全部应该什么都不传，直接传null
        channel_id: this.searchForm.channels_id,
        begin_pubdate: this.searchForm.dateRange.length ? this.searchForm.dateRange[0] : null, // 开始时间
        end_pubdate: this.searchForm.dateRange.length > 1 ? this.searchForm.dateRange[1] : null // 截止时间
      }
      this.getArticles(params)
    },
    // 获取所有的频道
    getChannels () {
      this.$axios({
        url: '/channels'
      }).then(result => {
        this.channels = result.data.channels
      })
    },
    getArticles (params) {
      this.$axios({
        url: '/articles',
        params
      }).then(result => {
        this.list = result.data.results // 获取文章列表数据
      })
    }
  },
  created () {
    this.getChannels() // 获取文章数据
    this.getArticles() // 获取文章列表数据
  }
}
</script>

<style lang="less" scoped>
.articles {
  .total {
    height: 60px;
    border-bottom: 1px #ccc dashed;
  }
  .article-item {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #f2f3f5;
    .left {
      display: flex;
      img {
        width: 150px;
        height: 150px;
        border-radius: 5px;
      }
      .info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        height: 150px;
        justify-content: space-around;
        .date {
          color: #999;
          font-size: 12px;
        }
        .tag {
          text-align: center;
          width: 70px;
          padding: 0 0;
        }
      }
    }
    .right {
      span {
        font-size: 14px;
        margin-right: 10px;
        cursor: pointer;
      }
      span:hover {
        color: red;
      }
    }
  }
}
</style>
