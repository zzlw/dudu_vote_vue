<template>
  <IEcharts
    :option="bar"
    @ready="onReady"
  />
</template>

<script>
  import IEcharts from 'vue-echarts-v3/src/lite.js'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/dataZoom'
  import 'echarts/lib/component/grid'
  import 'echarts/lib/component/title'

  // let data2 = [
  //   {
  //     'hour': '01',
  //     'pv': 11,
  //     'ip': 10,
  //   },
  //   {
  //     'hour': '02',
  //     'pv': 16,
  //     'ip': 8,
  //   },
  //   {
  //     'hour': '03',
  //     'pv': 12,
  //     'ip': 8,
  //   },
  //   {
  //     'hour': '04',
  //     'pv': 13,
  //     'ip': 11,
  //   },
  //   {
  //     'hour': '05',
  //     'pv': 12,
  //     'ip': 7,
  //   },
  //   {
  //     'hour': '06',
  //     'pv': 15,
  //     'ip': 8,
  //   },
  //   {
  //     'hour': '07',
  //     'pv': 17,
  //     'ip': 12,
  //   },
  //   {
  //     'hour': '08',
  //     'pv': 14,
  //     'ip': 12,
  //   },
  //   {
  //     'hour': '09',
  //     'pv': 19,
  //     'ip': 14,
  //   },
  //   {
  //     'hour': '10',
  //     'pv': 11,
  //     'ip': 8,
  //   },
  //   {
  //     'hour': '11',
  //     'pv': 15,
  //     'ip': 11,
  //   },
  //   {
  //     'hour': '12',
  //     'pv': 22,
  //     'ip': 12,
  //   },
  //   {
  //     'hour': '13',
  //     'pv': 12,
  //     'ip': 7,
  //   },
  //   {
  //     'hour': '14',
  //     'pv': 10,
  //     'ip': 9,
  //   },
  //   {
  //     'hour': '15',
  //     'pv': 14,
  //     'ip': 9,
  //   },
  //   {
  //     'hour': '16',
  //     'pv': 14,
  //     'ip': 11,
  //   },
  //   {
  //     'hour': '17',
  //     'pv': 13,
  //     'ip': 8,
  //   },
  //   {
  //     'hour': '18',
  //     'pv': 17,
  //     'ip': 10,
  //   },
  //   {
  //     'hour': '19',
  //     'pv': 49,
  //     'ip': 49,
  //   }
  // ]

  let dateList = (data2) => {
    return data2.map(function (item) {
      return item.hour
    })
  }

  let valueList = (data2, type) => {
    return data2.map(function (item) {
      if (type === 'pv') {
        return item.pv
      } else {
        return item.ip
      }
    })
  }

  export default {
    name: 'Demo01',
    props: ['cells'],
    components: {
      IEcharts,
    },
    data () {
      return {
        ins: null,
        echarts: null,
        type: 'pv',
        bar: {},
      }
    },
    mounted () {
      console.log(this.cells,111)
    },
    methods: {
      onReady (instance, echarts) {
        let _dateList = dateList(this.cells)
        const that = this
        that.ins = instance
        that.echarts = echarts
        that.bar = {
          title: {
            text: '实时数据',
            subtext: '支持滑动操作',
            left: 'left',
            textStyle: {
              interval: 0,
              color: '#000',
              fontSize: 12,
            },
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
            },
          },
          legend: {
            data: ['PV', 'IP'],
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            containLabel: true,
          },
          xAxis: {
            data: _dateList,
            axisLabel: {
              interval: 0,
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
              }
            },
            axisPointer: {
                snap: true
            }
          },
          dataZoom: [
            {
              type: 'inside',
              startValue: _dateList[_dateList.length >= 5 ? _dateList.length - 5 : _dateList.length],
              endValue: _dateList[_dateList.length >= 1 ? _dateList.length - 1 : 0],
            },
          ],
          series: [
            {
              name: 'PV',
              type: 'line',
              smooth: true,
              symbolSize: 10,
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
              data: valueList(that.cells, 'pv'),
            },
            {
              name: 'IP',
              type: 'line',
              smooth: true,
              symbolSize: 10,
              data: valueList(that.cells, 'ip'),
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
