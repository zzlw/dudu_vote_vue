<template>
  <IEcharts
    :option="bar"
    @ready="onReady"
  />
</template>

<script>
  const IEcharts = require.ensure([], function (require) {
    require('vue-echarts-v3/src/full.js')
  })

  // import IEcharts from 'vue-echarts-v3/src/full.js'

  const symbolSize = 20
  let data = [
    ['07-10', 9100],
    ['07-11', 9200],
    ['07-12', 11300],
    ['07-13', 10700],
    ['07-14', 13100],
    ['07-15', 11100],
    ['07-16', 6400],
    ['07-17', 6900],
    ['07-18', 8800],
    ['07-19', 7700],
    ['07-20', 8300],
    ['07-21', 11100],
    ['07-22', 5700],
    ['07-23', 5500],
    ['07-24', 6000],
  ]

  var dateList = data.map(function (item) {
    return item[0]
  })
  var valueList = data.map(function (item) {
    return item[1]
  })
  export default {
    name: 'Demo01',
    components: {
      IEcharts,
    },
    data () {
      return {
        ins: null,
        echarts: null,
        bar: {
          // title: {
          //   left: "center",
          //   text: ""
          // },
          // tooltip: {
          //   trigger: "axis"
          // },
          // xAxis: {
          //   data: dateList,
          //   axisLabel: {
          //     inside: false,
          //     textStyle: {
          //       interval: 0,
          //       color: "#fff",
          //       fontSize: 12
          //     }
          //   },
          //   axisTick: {
          //     show: false
          //   },
          //   axisLine: {
          //     show: false
          //   },
          //   z: 10
          // },
          // yAxis: {
          //   splitLine: { show: false },
          //   axisLabel: {
          //     interval: 0
          //   }
          // },
          // series: {
          //   type: "line",
          //   showSymbol: false,
          //   smooth: true,
          //   data: valueList,
          //   itemStyle: {
          //     normal: {
          //       color: "#00ffe0"
          //     }
          //   }
          // }
        },
      }
    },
    methods: {
      onReady (instance, echarts) {
        const that = this
        that.ins = instance
        that.echarts = echarts
        that.bar = {
          title: {
            left: 'center',
            text: 'PV IP',
            textStyle: {
              interval: 0,
              color: '#666',
              fontSize: 14,
            },
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true,
          },
          xAxis: {
            data: dateList,
            axisLabel: {
              inside: false,
              textStyle: {
                interval: 0,
                color: '#fff',
                fontSize: 12,
              },
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            z: 10,
          },
          yAxis: {
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#999',
              },
            },
          },
          dataZoom: [
            {
              type: 'inside',
            },
          ],
          series: [
            {
              type: 'line',
              smooth: true,
              itemStyle: {
                normal: {
                  color: '#00ffe0',
                },
              },
              label: {
                normal: {
                  fontWeight: 'bolder',
                  fontSize: 23,
                },
              },
              barWidth: 20,
              data: valueList,
            },
          ],
        }
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
