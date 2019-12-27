<template>
  <el-card>
    <!-- 头部内容 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <el-tabs v-model="activeName" @tab-click="changTab">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <div class="img-div">
              <img :src="item.url" alt />
            </div>
            <el-row class="operate" align="middle" type="flex" justify="space-around">
              <i class="el-icon-star-on"></i>
              <i class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
        <el-row type="flex" justify="center">
        <el-pagination :current-page="page.currentPage" :page-size="page.pageSize" background layout="prev, pager, next" :total="page.total"></el-pagination>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="收藏图片" name="collect">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <div class="img-div">
              <img :src="item.url" alt />
            </div>
          </el-card>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all', // 当前选中的标签，
      list: [],
      page: {
        currentPage: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  methods: {
    changTab () {
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          collect: this.activeName === 'collect' // false是获取全部数据 true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results // 获取当前选项的图片数据
      })
    }
  },
  created () {
    this.getMaterial()
  }
}
</script>

<style lang="less" scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  .img-card {
    width: 200px;
    height: 220px;
    margin: 20px 50px;
    border: none;
    position: relative;
    .img-div {
      width: 160px;
      height: 160px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .operate {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 20px;
      height: 40px;
    }
  }
}
</style>
