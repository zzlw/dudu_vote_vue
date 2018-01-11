// import { target } from '../utils/config'
// import request from 'superagent'
// import { browserHistory, hashHistory } from 'react-router'
// import { notification } from 'antd'
import http from '~/utils/http'

/*=================  登录、注册、找回密码  =======================*/
//登录
export const post_web_authenticate= function(data) {
  return http.post('/web/authenticate', data.data)
}

//发送验证码
export const post_web_captcha= function(data) {
  return http.post('/web/captcha', data.data)
}

//注册
export const post_web_register= function(data) {
  return http.post('/web/register', data.data)
}

//重置密码
export const post_web_password_reset_mobile = function (data) {
  return http.post(`/web/password/reset/${data.tel}`, data.data)
}






/*=======================  获取用户信息  =======================*/
//获取用户信息
export const get_web_user_info = function (ctx) {
  return http.get('/web/user-info', {}, ctx)
}



/*=======================  帮助中心  =======================*/
//获取问题目录
export const web_help_center_catalogue = function (data) {
  return http.get('/web/help-center/catalogue', data)
}

// 问题详情
export const question_id = function (data) {
  return http.get(`/web/questions/${data.id}`, data)
}



//帮助中心搜索
export const web_questions_search = function (data) {
  return http.get(`/web/questions-search`, data)
}


/*=======================  管理中心 - 应用列表  =======================*/
//获取应用列表
export const web_applications = function (data) {
  return http.get(`/web/applications`, data)
}

//获取应用详情
export const get_web_applications_id = function (data) {
  return http.get(`/web/applications/${data.id}`, {})
}

