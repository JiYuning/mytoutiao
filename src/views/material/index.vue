
//  素材列表

<template>
  <el-card v-loading="loading">
    <!-- 头部内容 -->
    <bread-crumb slot="header">
      <template slot="title">素材管理</template>
    </bread-crumb>
    <!-- 上传图片 -->
    <el-row type="flex" justify="end">
      <el-upload action="" :http-request="uploadImg" :show-file-list="false">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    </el-row>
    <el-tabs v-model="activeName" @tab-click="changTab">
      <el-tab-pane label="全部图片" name="all">
        <div class="img-list">
          <el-card class="img-card" v-for="item in list" :key="item.id">
            <div class="img-div">
              <img :src="item.url" alt />
            </div>
            <el-row class="operate" align="middle" type="flex" justify="space-around">
              <i
                @click="collectOrCancel(item)"
                :style="{ color: item.is_collected ? 'red':'#000' }"
                class="el-icon-star-on"
              ></i>
              <i @click="delMaterial(item.id)" class="el-icon-delete-solid"></i>
            </el-row>
          </el-card>
        </div>
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
      <el-row type="flex" justify="center">
        <el-pagination
          :page-size="page.pageSize"
          :current-page="page.currentPage"
          :pager-count="11"
          layout="prev, pager, next"
          :total="page.total"
          @current-change="changePage"
        ></el-pagination>
      </el-row>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
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
    uploadImg (params) {
      this.loading = true
      let data = new FormData()
      data.append('image', params.file)// 文件加入参数中
      this.$axios({
        method: 'post',
        url: '/user/images',
        data
      }).then(result => {
        this.loading = false
        this.getMaterial() // 重新拉取数据
      })
    },
    delMaterial (id) {
      // 删除图片
      this.$confirm('你确定要删除此图片吗').then(() => {
        this.$axios({
          method: 'delete',
          url: `/user/images/${id}`
        }).then(result => {
          this.getMaterial() // 重新拉取数据
        })
      })
    },
    collectOrCancel (item) {
      // 收藏或取消
      this.$axios({
        method: 'put',
        url: `/user/images/${item.id}`,
        data: {
          collect: !item.is_collected // 取反
        }
      }).then(result => {
        this.getMaterial() // 重新拉取数据
      })
    },
    changePage (newPage) {
      // 页码改变事件
      this.page.currentPage = newPage // 最新页码
      this.getMaterial()
    },
    changTab () {
      this.page.currentPage = 1
      this.getMaterial()
    },
    getMaterial () {
      this.$axios({
        url: '/user/images',
        params: {
          page: this.page.currentPage,
          per_page: this.page.pageSize,
          collect: this.activeName === 'collect' // false是获取全部数据 true是获取收藏数据
        }
      }).then(result => {
        this.list = result.data.results // 获取当前选项的图片数据
        this.page.total = result.data.total_count
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
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
