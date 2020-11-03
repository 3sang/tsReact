const { override, fixBabelImports } = require('customize-cra');

// 实现按需加载antd css
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
