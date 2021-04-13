<template>
  <div class="container-home">
    <my-360nav> </my-360nav>
    <div class="content">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.container-home {
  .content {
    height: 100px;
    padding: 0 30%;
    position: relative;
    .left,
    .center,
    .right {
      height: 100px;
      position: absolute;
    }
    .left {
      width: 30%;
      background-color: blue;
      left: 0;
    }
    .center {
      width: 40%;
      background-color: #ccc;
    }
    .right {
      width: 30%;
      background-color: #000;
      right: 0;
    }
  }
}
</style>