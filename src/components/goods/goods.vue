<template>
    <div class="goods">
      <div class="menu-wrapper" v-el:menu-wrapper>
        <ul>
          <li v-for="item in goods" class="menu-item"
              :class="{'current':currentIndex === $index }"
              @click="selectMenu($index,$event)"
          >
            <span class="text">
               <icon v-if="item.type > 0" :icontype="{type:item.type,size:'threeSize'}"></icon>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foots-wrapper" v-el:foods-wrapper>
        <ul>
          <li v-for="item in goods" class="foods-list foods-list-hook">
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
  import BScroll from 'better-scroll';

    export default{
        data(){
           return{
             goods:[],
             listHeights:[],
             scrollY:0
           }
        },
        props: ['seller'],
        created () {

          this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.erron === 0) {
              this.goods = response.data;

              this.$nextTick(()=>{
                this._initScroll();
                this._calculateHeight();
              })
            }
          })
        },
        computed:{
          currentIndex(){
            for(let i = 0 ; i < this.listHeights.length; i++){
              let height1 = this.listHeights[i];
              let height2 = this.listHeights[i+1];
              if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
                return i;
              }
            }

            return 0;

          }
        },
        methods:{
          _initScroll(){
            this.menuScroll = new BScroll(this.$els.menuWrapper,{
              click:true
            });
            this.foodsScroll = new BScroll(this.$els.foodsWrapper,{
              probeType:3
            });
            this.foodsScroll.on('scroll',(pos)=>{
              this.scrollY =  Math.abs(Math.round(pos.y));
            });
          },
          _calculateHeight(){
            let footList = this.$els.foodsWrapper.getElementsByClassName("foods-list-hook");
            let height = 0;
            this.listHeights.push(height);
            for(let i = 0 ; i < footList.length;i++){
              let item = footList[i];
              height += item.clientHeight;
              this.listHeights.push(height);
            }
          },
          selectMenu(index,event){
            if(!event._constructed){
              return ;
            }
            let footList = this.$els.foodsWrapper.getElementsByClassName("foods-list-hook");
            let el = footList[index];
            this.foodsScroll.scrollToElement(el,300);
            console.log(index);
          }
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
      .current
        background #ffffff
        position relative
        z-index 10
        margin-top -1px
        font-weight 700

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
