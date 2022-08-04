module.exports = {
    parser: '@typescript-eslint/parser', // 指定ESLint解析器
    extends: [
        'plugin:@typescript-eslint/recommended', // 使用来自@typescript-eslint/eslint-plugin的推荐规则
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2022, // 允许解析最新的 ECMAScript 特性
        sourceType: 'module', // 允许使用 import
        ecmaFeatures: {
            jsx: true, // 允许对JSX进行解析
        },
    },
    rules: {
        // 自定义规则
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'no-unused-vars': 0,
        '@typescript-eslint/no-var-requires': 'off',
        'prefer-const': 'off', // 关闭 prefer-const
    },
    settings: {
        react: {
            version: 'detect', // 告诉 eslint-plugin-react 自动检测 React 的版本
        },
    },
};
