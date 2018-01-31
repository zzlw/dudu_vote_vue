import moment from 'moment'
import VueClipboard from 'vue-clipboard2'
import {
  Cell, Datetime, Divider, FormPreview, Group, Swiper, SwiperItem, Tab, Tabbar, TabbarItem, TabItem, Toast,
  ToastPlugin, XAddress, XButton, XDialog, XInput, XNumber, XSwitch, XTextarea, LoadingPlugin, ConfirmPlugin
} from 'vux'

import BaseAvatar from 'components/operator/base/BaseAvatar.vue'
import BaseDataThree from 'components/operator/base/BaseDataThree.vue'
import BaseTitle from 'components/operator/base/BaseTitle.vue'
import BaseActivityList from 'components/operator/base/BaseActivityList.vue'
import BaseManTemplate from 'components/operator/base/BaseManTemplate.vue'
import BaseActivitySwiper from 'components/operator/base/BaseActivitySwiper.vue'
import BaseNavigation from 'components/operator/base/BaseNavigation.vue'

import HomeInfo from 'components/operator/home/HomeInfo.vue'

import ButtonUpload from 'components/button/ButtonUpload.vue'
import ButtonCustom from 'components/button/ButtonCustom.vue'

export default {
  install (Vue, options) {
    Vue.component('base-avatar', BaseAvatar)
    Vue.component('base-data-three', BaseDataThree)
    Vue.component('base-title', BaseTitle)
    Vue.component('base-activity-list', BaseActivityList)
    Vue.component('base-man-template', BaseManTemplate)
    Vue.component('base-activity-swiper', BaseActivitySwiper)
    Vue.component('base-navigation', BaseNavigation)

    Vue.component('home-info', HomeInfo)

    Vue.component('ButtonUpload', ButtonUpload)
    Vue.component('ButtonCustom', ButtonCustom)

    Vue.component('Group', Group)
    Vue.component('XInput', XInput)
    Vue.component('XButton', XButton)
    Vue.component('Divider', Divider)
    Vue.component('Swiper', Swiper)
    Vue.component('SwiperItem', SwiperItem)
    Vue.component('XDialog', XDialog)
    Vue.component('TabItem', TabItem)
    Vue.component('Tab', Tab)
    Vue.component('Datetime', Datetime)
    Vue.component('XSwitch', XSwitch)
    Vue.component('Cell', Cell)
    Vue.component('XNumber', XNumber)
    Vue.component('XAddress', XAddress)
    Vue.component('XTextarea', XTextarea)
    Vue.component('FormPreview', FormPreview)

    Vue.component('Tabbar', Tabbar)
    Vue.component('TabbarItem', TabbarItem)

    Vue.use(ToastPlugin)
    Vue.use(LoadingPlugin)
    Vue.use(ConfirmPlugin)
    // Vue.use(Toast)

    // 复制到剪切板
    Vue.use(VueClipboard)

    Vue.prototype.moment = moment

    Vue.prototype.rem = function (size) {
      return size / 640 * 10 + 'rem'
    }

    // 表单验证
    // 邮箱
    Vue.prototype.validateEmail = function (value, callback) {
      return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ? {valid: true} : {
        valid: true,
        msg: '用户名规则：只允许英文字母、数字、下划线、英文句号、以及中划线组成！',
      }
    }

    // 密码
    Vue.prototype.validatePass = function (value, callback) {
      return /^[a-zA-Z\d_]{4,32}$/.test(value) ? {valid: true} : {
        valid: false,
        msg: '密码规则：密码不能为空；密码不能小于4位；密码不能大于32位！',
      }
    }

    // 手机
    Vue.prototype.validateTel = function (value, callback) {
      return /^1[3,4,5,8,7]\d{9}$/.test(value) ? {valid: true} : {valid: false, msg: '手机规则：手机不能为空；手机号为11拉伯数字！'}
    }

    // 验证码
    Vue.prototype.validateCaptcha = function (rule, value, callback) {
      return /^[a-zA-Z\d_]{4}$/.test(value) ? {valid: true} : {valid: false, msg: '验证码规则：验证码不能为空；验证码为4位！'}
    }

    // 验证一组表单是否合法
    Vue.prototype.isEmpty = function (obj) {
      let texts = ''
      for (let i in obj) {
        if (obj[i].valid === false) {
          if (!texts) {
            texts += '<h5>登录失败，您输入的格式有误！</h5>'
          }
          texts += `<h6>${obj[i].msg}</h6> `
        }
      }
      return texts || false
    }
  },
}
