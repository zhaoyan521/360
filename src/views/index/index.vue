<template>
  <div class="container-healthy">
    <div class="banner">
      <header>
        <img src="../../assets/h360-logo.png" alt="" />
        <span class="iconfont iconzhuxiao" @click="cancel()"></span>
      </header>
    </div>
    <footer></footer>
    <el-card class="indexForm">
      <el-form
        :inline="true"
        :model="indexParams"
      >
        <el-form-item label="索引类型:" porp="indexType">
          <el-select
            v-model="indexParams.indexType"
            placeholder="请选择"
            style="width: 275px"
          >
            <el-option label="身份证" value="IDcard"></el-option>
            <el-option label="病历号" value="bingli"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="索引号码:" porp="indexId">
          <el-input
            v-model="indexParams.indexId"
            placeholder="请输入"
            style="width: 360px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="search" @click="search">检索</el-button>
          <el-button @click="cancel()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import "../../assets/font_2480585_a44plqx1bqo/iconfont.css";
export default {
  data() {
    return {
      indexParams: {
        indexType: "",
        indexId: "",
      },
    };
  },
  methods: {
    search() {
      this.$router.push("/home");
    },
    cancel() {
      this.$router.push("/");
    },
  },
};
</script>
<style lang="less" scoped>
.container-healthy {
  width: 100%;
  height: 100%;
  .banner {
    width: 100%;
    height: 792px;
    background: url("../../assets/h360-index.jpg") no-repeat center/cover;
    header {
      width: 100%;
      height: 70px;
      position: relative;
      img {
        display: inline-block;
        margin: 22px 30px;
      }
      span {
        display: inline-block;
        font-size: 22px;
        color: #fff;
        position: absolute;
        top: 24px;
        right: 20px;
      }
    }
  }
  .el-card {
    width: 1200px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 756px;
    .el-form {
      margin-left: 38px;
      margin-top: 14px;
      .el-button {
        display: inline-block;
        width: 98px;
        height: 32px;
        color: #000;
      }
      .search {
        background-color: #05b0c7;
        color: #fff;
        margin-left: 30px;
        margin-right: 20px;
      }
    }
  }
}
</style>
