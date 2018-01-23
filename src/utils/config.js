
let mode = 'hash'
let apiHost = 'http://dev.mp.duduapp.net'

if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {
  // mode = 'hash' // history
  // baseUrl = 'http://cangdu.org:8001';
}

export default {
  apiHost,
  apiUrl: '',
  base: '',
  mode
}
