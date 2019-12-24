<template>
  <div>
      <el-carousel :interval="4000" type="card" height="600px">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="item" alt="" class="img">
        </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'http://img2.imgtn.bdimg.com/it/u=1951508150,4093808038&fm=15&gp=0.jpg',
        'http://img0.imgtn.bdimg.com/it/u=3951247806,1267482148&fm=15&gp=0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=3904979173,3424509666&fm=26&gp=0.jpg',
        'http://img4.imgtn.bdimg.com/it/u=2508140028,482482132&fm=15&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.img{
  width: 100%;
}
</style>
