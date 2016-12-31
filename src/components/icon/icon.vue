<template>
    <span class="icon" :class="[classMap[icontype.type],icontype.size]"></span>
</template>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixin.styl"
  @import "../../common/stylus/Icon.styl"

  .icon


  .oneSize
    display:inline-block
    vertical-align :top
    width:12px
    height:12px
    margin-left:4px
    background-size:12px 12px
    background-repeat:no-repeat
    &.decrease
      bg-image('decrease_1')
    &.discount
      bg-image('discount_1')
    &.guarantee
      bg-image('guarantee_1')
    &.invoice
      bg-image('invoice_1')
    &.special
      bg-image('special_1')
  .twoSize
    display inline-block
    width 16px
    height 16px
    vertical-align top
    margin-right 6px
    background-size 16px 16px
    background-repeat no-repeat
    &.decrease
      bg-image('decrease_2')
    &.discount
      bg-image('discount_2')
    &.guarantee
      bg-image('guarantee_2')
    &.invoice
      bg-image('invoice_2')
    &.special
      bg-image('special_2')
  .threeSize
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


</style>
<script type="text/ecmascript-6">

    export default{
        props:['icontype'],
        data(){
            return{
                classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special']
            }
        },
        components:{

        }
    }
</script>
