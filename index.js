module.exports = {
    root : true,
    env : {
        node : true
    },
    extends : [
        'airbnb-base'
    ],
    rules : {
        'no-console' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent : ['error', 4, { "SwitchCase": 1 }],
        semi : ['error', 'never'],
        'space-before-function-paren' : ['error', 'always'],
        'import/extensions' : 'off',
        'class-methods-use-this' : 0,
        'no-param-reassign' : 'off',
        'max-len' : ['error', {code : 200}],
        'padded-blocks' : ['error', {classes : 'always'}],
        'key-spacing' : ['error', {afterColon : true, beforeColon : true}],
        'import/no-extraneous-dependencies' : 'off',
        'import/prefer-default-export' : 'off'
    }
}
