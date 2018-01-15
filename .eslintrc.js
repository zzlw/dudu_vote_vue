module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
    },
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        // 一个函数的复杂性不超过 10，所有分支、循环、回调加在一起，在一个函数里不超过 10 个
        "complexity": [2, 10],
        // 一个函数的嵌套不能超过 4 层，多个 for 循环，深层的 if-else，这些都是罪恶之源
        "max-depth": [2, 4],
        // 一个函数最多有 3 层 callback，使用 async/await
        "max-nested-callbacks": [2, 3],
        // 一个函数最多 5 个参数。参数太多的函数，意味着函数功能过于复杂，请拆分
        "max-params": [2, 5],
        // 一个函数最多有 50 行代码，如果超过了，请拆分之，或者精简之
        "max-statements": [2, 50],
        // 坚定的 semicolon-less 拥护者
        "semi": [2, "never"],
        "indent": [2, 4, { "SwitchCase": 0 }],
        // "no-tabs": "off",
        // 该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
        // "key-spacing":[2,{ "beforeColon": true, "afterColon": true }],
        // 函数定义时，function关键字后面的小括号前是否需要加空格
        // "space-before-function-paren":[2],
        // 规定了在代码块前是否需要加空格
        // "space-before-blocks": [2],
        // 规定了逗号前后的空白，默认配置规定逗号前面没有空白，而逗号后面需要留空白
        // "comma-spacing": [2, { "before": false, "after": true }],
        // 中綴操作符左右是否添加空格
        // "space-infix-ops": [2],
        // 要求箭头函数的箭头之前或之后有空格 (arrow-spacing)
        // "arrow-spacing":[2,{ "before": false, "after": false }],
        // 强制关键字周围空格的一致性 (keyword-spacing)
        // "keyword-spacing":["error",{ "before": true, "after": true }]
    },
    globals: {
        wx: true,
        weui: true
    },
}
