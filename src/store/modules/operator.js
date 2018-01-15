export const SAVE_OPERATOR = 'SAVE_OPERATOR'
/**
 * 运营商模块
 */
export default {
    namespaced: true,
    // 继承父模块的命名空间
    state: {
        operator: null
    },
    getters: {},
    mutations: {
        [SAVE_OPERATOR]: (state, payload) => {
            console.log(state)
            console.log(payload.operator)
            state.operator = payload.operator
            console.log('saveOperator', payload)
        }
    },
    actions: {}
}
