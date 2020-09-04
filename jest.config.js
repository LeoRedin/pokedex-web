const path = require('path')

module.exports = {
  setupFilesAfterEnv: ['./src/setupTests.js'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./src/test/style-mock.js'),
    '\\.(png|jpg|jpeg|gif|svg|ttf)$': require.resolve(
      './src/test/file-mock.js',
    ),
  },
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
}
