import Vue from 'vue'
import Vuex from 'vuex'

//状态树集
import user from './modules/user'
import posts from './modules/posts'


//插件
import { Plugin } from './plugins'


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        user,
        posts
    },
    plugins: [ Plugin("测试") ]
})
