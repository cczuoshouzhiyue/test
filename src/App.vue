<style lang="scss">
  @import "./src/style/common.scss";
  header{
    height: 60px;
    width: 100%;
    line-height: 50px;
    overflow: hidden;
  }
  .logo{
    float: left;
    .logo-img{
      width: 50px;
      height: 100%;
      background: #7e8c8d;
    }
    .logo-test{
      font-weight: bolder;
       h2{
        letter-spacing: 7px;
      }
       span{
        display: inline-block;
        position: relative;
        top: -30px;
        font-size: 12px;
        font-family: Consolas;
        margin-left: 60px;
      }
       h2:before{
        content: '';
        display: inline-block;
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 5px;
        background: url('./assets/logo.png')center;
        position: relative;
        top: 15px;
        left: 10px;
        margin-right: 10px;
      }
    }
  }

  .menu{
    float: right;
    text-align: right;
    font-weight: bold;
    margin-right: 50px;
    a:hover{
      background: #fff;
    }
  }
  .ht-el-menu{
    width: 500px;
    text-align: center;
    background: #fff;
    li{
      width: 120px;
      border:none !important;
    }
    li:hover{
      background-color: #fff !important;
    }
    li div:hover {
      background-color: #fff !important;
    }
  }
</style>

<template>
  <div id="app">
    <el-header>
      <header>
        <div class="logo">
          <div class="logo-test">
            <h2> 华泰证券</h2>
            <span>HUATAI SECURITIES</span>
          </div>

        </div>
        <div class="menu">
          <el-menu :default-active="activeIndex"
                   class="ht-el-menu"
                   mode="horizontal"
                   background-color="#fff"
                   text-color="#000"
                   active-text-color="#ffd04b"
                   :router= isRouter
          >
            <el-menu-item  index="/">首页</el-menu-item>
            <el-menu-item  index="/divisorStore">因子超市</el-menu-item>
            <el-menu-item  index="/divisorAnalysis">因子分析</el-menu-item>
            <el-submenu index="4">
              <template slot="title">组合管理</template>
              <el-menu-item  index="/groupManager">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
              <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </header>
    </el-header>

   <router-view></router-view>

  </div>

</template>

<script>
export default {
  data () {
    return {
      activeIndex: '/',
      isRouter: true
    }
  }
}
</script>
