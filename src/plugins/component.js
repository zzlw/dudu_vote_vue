import Vue from 'vue'
import moment from 'moment'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'


export default {
  install(Vue, options) {
    // Vue.use(ElementUI, { size: 'small' })

    Vue.prototype.moment = moment


    Vue.prototype.rem = function (size) {
        return size / 640 * 10 + 'rem'
    }


    //表单验证
    //邮箱
    Vue.prototype.validateEmail = function (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ? callback() : callback(new Error('您输入的格式有误！---  用户名规则：只允许英文字母、数字、下划线、英文句号、以及中划线组成！'))
      }
    }

    //密码
    Vue.prototype.validatePass = function (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        /^[a-zA-Z\d_]{4,32}$/.test(value) ? callback() : callback(new Error('您输入的格式有误！---  密码规则：密码不能为空；密码不能小于4位；密码不能大于32位！'))
      }
    }

    //手机
    Vue.prototype.validateTel = function (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入手机'))
      } else {
        /^1[3,4,5,8,7]\d{9}$/.test(value) ? callback() : callback(new Error('您输入的格式有误！---  手机规则：手机不能为空；手机号为11拉伯数字！'))
      }
    }

    //验证码
    Vue.prototype.validateCaptcha = function (rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入验证码'))
      } else {
        /^[a-zA-Z\d_]{4}$/.test(value) ? callback() : callback(new Error('您输入的格式有误！---  验证码规则：验证码不能为空；验证码为4位！'))
      }
    }

  }
}
