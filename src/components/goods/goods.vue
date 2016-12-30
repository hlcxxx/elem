<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" class="menu-item">
            <span class="text">
               <span v-if="item.type > 0" class="icon"  :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foots-wrapper"></div>
    </div>
</template>



<script type="text/ecmascript-6">

    export default{
        data(){
           return{
             goods:[],
             classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
           }
        },
        props: ['seller'],
        created () {

          this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.erron === 0) {
              this.goods = response.data;
            }
          })
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/Icon.styl"

  .goods
    display flex
    overflow hidden
    position absolute
    top: 182px
    bottom 46px
    width 100%
    .menu-wrapper
      width 80px
      flex 0 0 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        line-height 14px
        padding 0 12px
        .text
          display table-cell
          vertical-align middle
          font-size 12px
          .icon
            display:inline-block
            width:12px
            height:12px
            vertical-align top
            margin-right:2px
            background-size:12px 12px
            background-repeat:no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')

    .foots-wrapper
      flex:1


</style>
