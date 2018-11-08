<style scoped lang="scss">

</style>

<template>
  <div>
    <div id="myChart" v-cfocus></div>
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

// 引入提示框和title组件
export default {
  props: {
    data: Object
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.data.title,
          textStyle: {
            color: '#333',
            fontWeight: 'normal',
            fontFamily: 'Courier New',
            fontSize: 18,
            textBorderColor: 'yellow',
            padding: [0, 0, 0, 20]
          },
          left: 'center'
        },
        legend: {
          show: true,
          type: 'scroll',
          orient: 'vertical',
          selectedMode: 'single',
          right: 20,
          top: 20,
          data: ['衬衫', '羊毛衫1', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        grid: {
          show: true
        },
        itemStyle: {},
        tooltip: {},
        xAxis: {
          data: this.data.xAxis
        },
        yAxis: {},
        series: this.data.series
      })
    }
  }
}
</script>
