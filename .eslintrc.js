module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
    env: {
      browser: true,
      node: true,
      es6: true,
      mocha: true,
      jest: true,
      jasmine: true,
    },
    globals: {
      APP_TYPE: true,
      page: true,
    },
    rules: {
      'react/destructuring-assignment': 0,
      'react/jsx-tag-spacing': 0,
      'react/jsx-first-prop-new-line': 0,
      'react/jsx-indent-props': 0,
      'react/jsx-closing-bracket-location': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
      'react/jsx-wrap-multilines': 0,
      'react/prefer-stateless-function': 0,
      'react/prop-types': 0,
      'react/forbid-prop-types': 0,
      'react/jsx-one-expression-per-line': 0,
      'import/no-unresolved': [2, { ignore: ['^@/', '^umi/', 'dva'] }],
      'import/no-extraneous-dependencies': [
        2,
        {
          optionalDependencies: true,
          devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js'],
        },
      ],
      'jsx-a11y/no-noninteractive-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/anchor-is-valid': 0,
      'linebreak-style': 0, //强制使用一致的换行风格
      'no-nested-ternary': 0, // 禁用嵌套的三元表达式
      'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量
      'no-unused-expressions': 0, // 禁止出现未使用过的表达式
      'no-return-assign': 0, // 禁止在 return 语句中使用赋值语句
      'no-underscore-dangle': 0, // 禁止标识符中有悬空下划线
      'no-shadow': 0, // 禁止变量声明与外层作用域的变量同名
      'no-param-reassign':0, // 禁止对 function 的参数进行重新赋值
      'no-unused-vars': 1, //[2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
      'compat/compat': 0,
      'import/order': 1, // import顺序有误
      'no-undef': 1, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
      'react/self-closing-comp': 0, // 	html元素内容不能为空
      'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
      'array-callback-return': 0, // 强制数组方法的回调函数中有 return 语句
      'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
      'radix': 0, // 强制在parseInt()使用基数参数
      'react/jsx-indent': 1,
      'no-else-return': 1, // 禁止 if 语句中 return 语句之后有 else 块
      'prefer-destructuring': 0, // 优先使用数组和对象解构
      'no-lonely-if': 1, // 禁止 if 作为唯一的语句出现在 else 语句中
      'prefer-template': 1, // 要求使用模板字面量而非字符串连接
      'one-var': 1, // 强制函数中的变量要么一起声明要么分开声明
      'react/no-unused-state': 1, // 未使用的state
      'react/no-access-state-in-setstate': 0, // 需要在setState回调里使用旧state值
      'object-shorthand': 0, // 要求或禁止对象字面量中方法和属性使用简写语法
      'react/no-find-dom-node': 0, // 不允许使用findDOMNode方法
      'react/no-did-update-set-state': 0, // 不允许在componentDidUpdate内setState
      'react/jsx-boolean-value': 1, // 如果属性值为 true, 可以直接省略
      'no-multi-assign': 1, // 禁止连续赋值
      'no-useless-constructor': 1, // 禁用不必要的构造函数
      'lines-between-class-members': 1, // 要求或禁止类成员之间出现空行
      'react/sort-comp': 0, // React中函数的先后顺序
      'react/no-string-refs': 0,
      'react/jsx-curly-brace-presence': 1, // 不必要的大括号
      'import/prefer-default-export': 1, // export const要有default
      'spaced-comment': 1, // 强制在注释中 // 或 /* 使用一致的空格
      'no-useless-escape': 0, // 禁用不必要的转义字符
      'no-restricted-syntax': 1, // 禁用特定的语法
      'guard-for-in': 1, // 要求 for-in 循环中有一个 if 语句
  
    },
    settings: {
      polyfills: ['fetch', 'promises', 'url', 'object-assign'],
    },
  };
  