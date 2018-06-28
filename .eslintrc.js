module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  // "extends": "standard",
  "parserOptions": {
    "sourceType": "module"
  },
  "globals": {
    "__dirname": true,
  },
  "rules": {
    // "indent": [
    //   "error",
    //   "tab"
    // ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    "for-direction": "error",
    // 强制在 getter 属性中出现一个 return 语句
    "getter-return": "error",
    // 禁止在循环中 出现 await
    "no-await-in-loop": "error",
    // 允许使用"log", "dir"
    "no-console": ["error", {
      allow: ["log", "dir", 'error']
    }],
    // 警告 alert
    "no-alert": "warn",
    // 警告 debugger
    "no-debugger": "warn",
    // 警告冗余的括号
    "no-extra-parens": "warn",
    // 警告直接使用 Object.prototypes 的内置属性
    "no-prototype-builtins": "warn",
    // 要求 Switch 语句中有 Default 分支
    "default-case": "error",
    // 要求使用 === 和 !==
    "eqeqeq": "error",
    // 需要约束 for-in语句里必须包含if语句
    "guard-for-in": "error",
    // 禁止在 else 前有 return
    "no-else-return": "error",
    // 禁止出现空函数
    "no-empty-function": "error",
    // 禁止使用不带 await 表达式的 async 函数
    "require-await": "error",
    // 要求或禁止 var 声明中的初始化
    "no-var": "error",
    // 禁止变量声明与外层作用域的变量同名
    "no-shadow": "warn",
    // 禁止在变量定义之前使用它们
    "no-use-before-define": "warn",
  }
};