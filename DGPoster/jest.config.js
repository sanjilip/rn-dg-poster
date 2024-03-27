module.exports = {
    preset: 'react-native',
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
        '!**/coverage/**',
        '!**/app/Resources/**',
        '!babel.config.js',
        '!metro.config.js',
        '!**/index.js',
        '!**/.eslintrc.js',
        '!**/.prettierrc.js',
        '!**/.prettierrc.js',
        '!**/jest.config.js'
    ],
    modulePathIgnorePatterns: [
        //add files which can be ignored while running test and coverage
    ],
    setupFiles: ['<rootDir>/setupTest.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!d3)/']
};
