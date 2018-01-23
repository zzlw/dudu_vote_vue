import axios from 'axios'

const request = (params) => {
  let url = Window.AppConfig.analytics.url
  return axios({
    url,
    method: 'get',
    params,
  })
}

const apis = {
  pv (path) {
    request({
      action: 'pv',
      id: Window.AppConfig.id,
      uid: Window.AppConfig.uid,
      sex: Window.AppConfig.analytics.sex,
      url: path,
    })
  },
  share () {
    request({
      action: 'share',
      id: Window.AppConfig.id,
      uid: Window.AppConfig.uid,
      sex: Window.AppConfig.analytics.sex,
      url: location.hash.substr(1),
    })
  },
  go () {
    request({
      action: 'go',
      id: Window.AppConfig.id,
      uid: Window.AppConfig.uid,
      sex: Window.AppConfig.analytics.sex,
      url: location.hash.substr(1),
    })
  },
}

export default Object.assign({}, apis)
