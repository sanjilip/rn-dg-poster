module.exports = {
    root: true,
    extends: '@react-native-community',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true
    },
    extends: 'rallycoding',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    rules: {
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'comma-dangle': ['error', 'never']
    }
};
