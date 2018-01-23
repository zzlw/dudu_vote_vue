import Vue from 'vue'
import moment from 'moment'
import {timeDiffArray, localFile} from '../utils'

Vue.filter('number_format', value => {
  let s1 = +value
  if (!s1) return 0
  let s2 = s1.toFixed(2)
  if (s2.substr(-1) !== '0') {
    return s2
  } else if (s2.substr(-2, 1) !== '0' && s2.substr(-1) === '0') {
    return s1.toFixed(1)
  } else {
    return s1.toFixed(0)
  }
})
Vue.filter('time_diff_array', timeDiffArray)
Vue.filter('date_obj', value => {
  const date = moment(value)
  const cdate = moment()
  if (date.isSame(cdate, 'day')) {
    return {
      first_time: '',
      secend_time: date.format('HH:mm')
    }
  }
  if (date.isSame(cdate, 'year')) {
    return {
      first_time: date.format('MM-DD'),
      secend_time: date.format('HH:mm')
    }
  }
  if (date.isSame(cdate.subtract(1, 'years'), 'year')) {
    return {
      first_time: '去年',
      secend_time: date.format('MM-DD')
    }
  }
  return {
    first_time: date.format('E'),
    secend_time: date.format('MM-DD')
  }
})
Vue.filter('distance_format', value => {
  return value > 1000 ? (value / 1000).toFixed(1) + '公里' : value.toFixed(1) + '米'
})
Vue.filter('datetime_format', (value, format) => {
  return moment(value).format(format)
})
Vue.filter('join', (value, split) => {
  return value.join(split)
})
Vue.filter('localFile', localFile)
