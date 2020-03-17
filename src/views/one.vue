<template>
  <div class="ipad-course">
    <div class="header-top">
      <div class="header-back" @click="routeBack"></div>
      <div class="header-title">标题</div>
    </div>
    <div class="body">
      内容
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreviewiPad'
}
</script>

<style lang="less" scoped>
.ipad-course {
  text-align: center;
  .header-top {
    width: 100%;
    height: 88px;
    z-index: 99;
    background: #FFFFFF;
    box-shadow: 0 1px 0 0 #EAEAEA;
    .header-back {
      width: 40px;
      height: 40px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 30px;
      top: 26px;
      // transform: translateY(-50%);
      &::after {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background-image: url(../assets/images/arrow-left.png);
        background-repeat: no-repeat;
        background-size: contain;
      }
    }
    .header-title {
      font-size: 36px;
      text-align: center;
      line-height: 88px;
      font-family: PingFangSC-Regular;
      color: #222222;
    }
  }
  .body {
    padding: 40px 0px 18px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
