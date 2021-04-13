<template>
  <div class="navBar">
    <div class="logo">
      <img src="../assets/sa-logo.png" alt="" />
    </div>
    <div class="nav">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#007df6"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">医疗视图</el-menu-item>
        <el-menu-item index="3">公卫视图</el-menu-item>
      </el-menu>
    </div>
    <div class="userInfo">
      <el-button>患者索引</el-button>
      <div class="user_img">
        <img src="../assets/user_image.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.navBar {
  min-width: 1200px;
  height: 60px;
  background-color: #007df6;
  position: relative;
  padding: 0 260px;
  .logo,
  .userInfo {
    width: 260px;
    height: 60px;
    position: absolute;
    top: 0;
    .user_img {
      display: inline-block;
      margin-left: 18px;
      width: 60px;
      height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .logo {
    left: 0;
    img {
      margin: 12px 20px;
    }
  }
  .userInfo {
    right: 0;
  }
  .nav {
    height: 60px;
    position: relative;
    .el-menu {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .el-menu-item {
        font-size: 22px;
      }
    }
  }
}
</style>>
