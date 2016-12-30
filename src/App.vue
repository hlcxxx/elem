<template>
  <div>
    <appheader :seller="seller"></appheader>
    <div class="tab">
      <div class="tab-item">
        <a v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/ratings'}">评论</a>
      </div>
      <div class="tab-item">
        <a v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import appheader from './components/header/header'

export default {
  data () {
    return {
      seller:[]
    }
  },
 created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body;
      if (response.erron === 0) {
        this.seller = response.data;
      }
    })
  },
  components: {
    appheader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

    .tab
      display flex
      height 40px
      line-height 40px
      border-bottom 1px solid rgba(7,17,27,0.2)
    .tab-item
      flex 1
      text-align center



</style>
