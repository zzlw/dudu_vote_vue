import moment from 'moment'
export const isIOS = (userAgent = navigator.userAgent) => /(iPhone|iPad|iPod|iOS)/i.test(userAgent)
export const isAndroid = (userAgent = navigator.userAgent) => /(Android)/i.test(userAgent)
export const isWechat = (userAgent = navigator.userAgent) => /(MicroMessenger)/i.test(userAgent)
export const isAlipay = (userAgent = navigator.userAgent) => /(Alipay)/i.test(userAgent)
export const isMobile = mobile => {
  if (/^1[3|4|5|7|8]\d{9}$/.test(mobile.replace(/ /g, ''))) {
    return mobile.replace(/ /g, '')
  }
  return false
}
export const timeDiffArray = (dist, source = moment()) => {
  const dateDiffObj = timeDiffObj(dist, source)
  if (!dateDiffObj) {
    return []
  }
  if (dateDiffObj.days >= 1) {
    return [`${dateDiffObj.days}天`]
  } else {
    return [dateDiffObj.hours, dateDiffObj.minutes, dateDiffObj.seconds]
  }
}

export const timeDiffObj = (dist, source = moment()) => {
  if (!dist) {
    return false
  }
  const diff = Math.abs(moment().diff(dist))
  const leave1 = diff % (24 * 3600 * 1000)
  const leave2 = leave1 % (3600 * 1000)
  const leave3 = leave2 % (60 * 1000)
  const dateDiff = {
    days: Math.floor(diff / (24 * 3600 * 1000)), // 日
    hours: Math.floor(leave1 / (3600 * 1000)) < 10 ? '0' + Math.floor(leave1 / (3600 * 1000)) : Math.floor(leave1 / (3600 * 1000)), // 小时
    minutes: Math.floor(leave2 / (60 * 1000)) < 10 ? '0' + Math.floor(leave2 / (60 * 1000)) : Math.floor(leave2 / (60 * 1000)), // 分
    seconds: Math.floor(leave3 / 1000) < 10 ? '0' + Math.floor(leave3 / 1000) : Math.floor(leave3 / 1000),
  }
  return dateDiff
}
export const localFile = value => {
  const arr = /(http|https):\/\/(file|file2).duduapp.net\/(.*)/.exec(value)
  return `/${arr[2]}/${arr[3]}`
}

export {default as cache} from './cache'
