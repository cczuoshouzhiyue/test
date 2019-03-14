<template>
  <div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary" @click='getData'>发生get请求</el-button>
      <el-button type="success" @click="postData">发生post请求</el-button>
      <el-button type="info" @click="getTimeoutData">延时请求，会请求四次</el-button>
      <el-button type="warning" @click="setStore">设置store</el-button>
      <el-button type="danger" @click="changeStoreForDispatch">更改store</el-button>
    </el-row>
    <p>{{message}}</p>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-row :gutter="0">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <bar :data="eacharts">
          </bar>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Bar from '@/components/echarts/bar'
import {mapState, mapMutations} from 'vuex'
import {product as axios} from '@/api/index'
export default {
  components: {
    bar: Bar
  },
  data () {
    return {
      message: '',
      input: '123',
      eacharts: {
        title: 'ECharts练习',
        xAxis: ['衬衫', '羊毛衫1', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        color: ['#eee', '#333'],
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  computed: mapState({
    getState: state => state.type,
    cacluOther: function (state) {
      return state.type + '123'
    }
  }),
  methods: {
    getData () {
      console.log(axios)
      let param = {
        CurPage: 0,
        PageSize: 1
      }
      axios.getProductList(param).then((data) => {
        console.log('success')
      }, () => {
        console.log('error')
      })
    },
    postData () {
      let _this = this
      let param = {
        c: 123,
        d: 222
      }
    },
    getTimeoutData () {
      let _this = this
      let param = {
        a: 1,
        b: 123
      }
    },
    setStore () {
      this.changeStore('aaa')
    },
    changeStoreForDispatch () {
      // this.$store.commit('changeType', 'bbb')
      this.$store.dispatch('changeType', 'bbb').then(function () {
        console.log('改变完成')
      })
    },
    ...mapMutations({
      changeType: 'CHANGETYPE'
    })
  }
}
</script>
