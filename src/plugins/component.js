import Vue from 'vue'
import moment from 'moment'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import {
    Group,
    XInput,
    XButton,
    Divider,
    ToastPlugin,
    Swiper,
    SwiperItem
} from 'vux'
// import TabBar from 'components/base/TabBar.vue'
// import BaseAvatar from 'components/base/BaseAvatar.vue'
// import BaseDataThree from 'components/base/BaseDataThree.vue'
// import BaseTiele from 'components/base/BaseTiele.vue'
// import BaseActivityList from 'components/base/BaseActivityList.vue'
// import BaseManTemplate from 'components/base/BaseManTemplate.vue'
// import BaseActivitySwiper from 'components/base/BaseActivitySwiper.vue'




// import HomeInfo from 'components/home/HomeInfo.vue'


export default {
  install(Vue, options) {
    // Vue.component('base-tab-bar', TabBar)
    // Vue.component('base-avatar', BaseAvatar)
    //   Vue.component('base-data-three', BaseDataThree)
    //   Vue.component('base-tiele', BaseTiele)
    //   Vue.component('base-activity-list', BaseActivityList)
    //   Vue.component('base-man-template', BaseManTemplate)
    //   Vue.component('base-activity-swiper', BaseActivitySwiper)







    //   Vue.component('home-info', HomeInfo)







    Vue.component('Group',Group)
    Vue.component('XInput',XInput)
      Vue.component('XButton', XButton)
      Vue.component('Divider', Divider)
      Vue.component('Swiper', Swiper)
      Vue.component('SwiperItem', SwiperItem)
      Vue.use(ToastPlugin)


    Vue.prototype.moment = moment




    Vue.prototype.rem = function (size) {
        return size / 640 * 10 + 'rem'
    }


    //表单验证
    //邮箱
    Vue.prototype.validateEmail = function (value, callback) {
        return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value) ? { valid: true } : { valid: true, msg: '用户名规则：只允许英文字母、数字、下划线、英文句号、以及中划线组成！' }
    }

    //密码
    Vue.prototype.validatePass = function (value, callback) {

        return /^[a-zA-Z\d_]{4,32}$/.test(value) ? { valid: true } : { valid: false, msg: '密码规则：密码不能为空；密码不能小于4位；密码不能大于32位！' }
    }

    //手机
    Vue.prototype.validateTel = function (value, callback) {
        return /^1[3,4,5,8,7]\d{9}$/.test(value) ? { valid: true } : { valid: false, msg: '手机规则：手机不能为空；手机号为11拉伯数字！' }
    }

    //验证码
    Vue.prototype.validateCaptcha = function (rule, value, callback) {

        return /^[a-zA-Z\d_]{4}$/.test(value) ? { valid: true } : { valid: false, msg: '验证码规则：验证码不能为空；验证码为4位！' }
    }


      //验证一组表单是否合法
      Vue.prototype.isEmpty = function (obj) {
          let texts= ''
          for (let i in obj) {
              if (obj[i].valid === false){
                  if (!texts){
                      texts += '<h5>登录失败，您输入的格式有误！</h5>'
                  }
                  texts += `<h6>${obj[i].msg}</h6> `
              }
          }
          return texts ? texts : false
      }

  }
}