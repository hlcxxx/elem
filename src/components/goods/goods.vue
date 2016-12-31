<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" class="menu-item">
            <span class="text">
               <icon v-if="item.type > 0" :icontype="{type:item.type,size:'threeSize'}"></icon>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foots-wrapper">
        <ul>
          <li v-for="item in goods" class="foods-list">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li v-for="food in item.foods" class="food-item border-1px">
                <div class="foodicon">
                  <img width="57" height="57" :src="food.icon" />
                </div>

                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}</span>
                  </div>
                  <div class="price">
                    <span class="new">¥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                  </div>
                </div>

              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>



<script type="text/ecmascript-6">
  import icon from 'components/icon/icon';

    export default{
        data(){
           return{
             goods:[]
           }
        },
        props: ['seller'],
        created () {

          this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.erron === 0) {
              this.goods = response.data;

              for(let item in this.goods){
                console.log(this.goods[item].name);
              }
            }
          })
        },
        components:{
          icon
        }
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
    .foots-wrapper
      flex:1
      .title
        padding-left 14px
        height: 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color rgb(147,153,159)
        background #F3F5F7
      .food-item
        display flex
        margin 18px
        padding-bottom 18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-none()
          margin-bottom 0
        .foodicon
          flex: 0 0 57px
          margin-right 10px
        .content
          flex 1
          .name
            font-size 17px
            margin:2px 0 8px 0
            height 17px
            line-height 17px
            color:rgb(7,17,27)
          .desc
            margin-bottom 8px
            line-height 10px
            font-size 10px
            color rgb(147,153,159)
          .extra
            margin-bottom 8px
            line-height 10px
            font-size 10px
            color rgb(147,153,159)
            .count
              margin-right 12px
          .price

            line-height 24px
            .new
              font-size 14px
              font-weight 700
              margin-right 8px
              color rgb(240,20,20)
            .old
              text-decoration dashed
              color rgb(147,153,159)
</style>
