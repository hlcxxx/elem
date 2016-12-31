<template>
    <div>
        <icon :icontype="icontype"></icon>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script type="text/ecmascript-6">
  import icon from 'components/icon/icon';

  export default{
    data () {
      return {
        icontype:{
          type:1,
          size:'oneSize'
        }
      }
    },
    components:{
      icon
    }
  }
</script>
