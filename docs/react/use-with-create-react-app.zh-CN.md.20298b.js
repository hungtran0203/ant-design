(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/react/use-with-create-react-app.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/use-with-create-react-app.zh-CN.md":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/use-with-create-react-app.zh-CN.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"article\",\n    {\n\n    },\n    [\n      \"h2\",\n      \"安装和初始化\"\n    ],\n    [\n      \"p\",\n      \"在开始之前，你可能需要安装 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/yarnpkg/yarn/\"\n        },\n        \"yarn\"\n      ],\n      \"。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"bash\",\n        \"highlighted\": \"$ yarn create react-app antd-demo\\n\\n<span class=\\\"token comment\\\" spellcheck=\\\"true\\\"># or</span>\\n\\n$ npx create-react-app antd-demo\"\n      },\n      [\n        \"code\",\n        \"$ yarn create react-app antd-demo\\n\\n# or\\n\\n$ npx create-react-app antd-demo\"\n      ]\n    ],\n    [\n      \"p\",\n      \"工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。\"\n    ],\n    [\n      \"p\",\n      \"然后我们进入项目并启动。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"bash\",\n        \"highlighted\": \"$ <span class=\\\"token function\\\">cd</span> antd-demo\\n$ yarn start\"\n      },\n      [\n        \"code\",\n        \"$ cd antd-demo\\n$ yarn start\"\n      ]\n    ],\n    [\n      \"p\",\n      \"此时浏览器会访问 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"http://localhost:3000/\"\n        },\n        \"http://localhost:3000/\"\n      ],\n      \" ，看到 \",\n      [\n        \"code\",\n        \"Welcome to React\"\n      ],\n      \" 的界面就算成功了。\"\n    ],\n    [\n      \"h2\",\n      \"引入 antd\"\n    ],\n    [\n      \"p\",\n      \"这是 create-react-app 生成的默认目录结构。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": null,\n        \"highlighted\": \"├── README<span class=\\\"token punctuation\\\">.</span>md\\n├── package<span class=\\\"token punctuation\\\">.</span>json\\n├── public\\n│   ├── favicon<span class=\\\"token punctuation\\\">.</span>ico\\n│   └── index<span class=\\\"token punctuation\\\">.</span>html\\n├── src\\n│   ├── App<span class=\\\"token punctuation\\\">.</span>css\\n│   ├── App<span class=\\\"token punctuation\\\">.</span>js\\n│   ├── App<span class=\\\"token punctuation\\\">.</span>test<span class=\\\"token punctuation\\\">.</span>js\\n│   ├── index<span class=\\\"token punctuation\\\">.</span>css\\n│   ├── index<span class=\\\"token punctuation\\\">.</span>js\\n│   └── logo<span class=\\\"token punctuation\\\">.</span>svg\\n└── yarn<span class=\\\"token punctuation\\\">.</span>lock\"\n      },\n      [\n        \"code\",\n        \"├── README.md\\n├── package.json\\n├── public\\n│   ├── favicon.ico\\n│   └── index.html\\n├── src\\n│   ├── App.css\\n│   ├── App.js\\n│   ├── App.test.js\\n│   ├── index.css\\n│   ├── index.js\\n│   └── logo.svg\\n└── yarn.lock\"\n      ]\n    ],\n    [\n      \"p\",\n      \"现在从 yarn 或 npm 安装并引入 antd。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"bash\",\n        \"highlighted\": \"$ yarn add antd\"\n      },\n      [\n        \"code\",\n        \"$ yarn add antd\"\n      ]\n    ],\n    [\n      \"p\",\n      \"修改 \",\n      [\n        \"code\",\n        \"src/App.js\"\n      ],\n      \"，引入 antd 的按钮组件。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"jsx\",\n        \"highlighted\": \"<span class=\\\"token keyword\\\">import</span> React <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'react'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token punctuation\\\">{</span> Button <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">from</span> <span class=\\\"token string\\\">'antd'</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token string\\\">'./App.css'</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">const</span> App <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token operator\\\">=</span><span class=\\\"token operator\\\">></span> <span class=\\\"token punctuation\\\">(</span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>div</span> <span class=\\\"token attr-name\\\">className</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>App<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span>\\n    <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;</span>Button</span> <span class=\\\"token attr-name\\\">type</span><span class=\\\"token attr-value\\\"><span class=\\\"token punctuation\\\">=</span><span class=\\\"token punctuation\\\">\\\"</span>primary<span class=\\\"token punctuation\\\">\\\"</span></span><span class=\\\"token punctuation\\\">></span></span>Button<span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>Button</span><span class=\\\"token punctuation\\\">></span></span>\\n  <span class=\\\"token tag\\\"><span class=\\\"token tag\\\"><span class=\\\"token punctuation\\\">&lt;/</span>div</span><span class=\\\"token punctuation\\\">></span></span>\\n<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token keyword\\\">export</span> <span class=\\\"token keyword\\\">default</span> App<span class=\\\"token punctuation\\\">;</span>\"\n      },\n      [\n        \"code\",\n        \"import React from 'react';\\nimport { Button } from 'antd';\\nimport './App.css';\\n\\nconst App = () => (\\n  <div className=\\\"App\\\">\\n    <Button type=\\\"primary\\\">Button</Button>\\n  </div>\\n);\\n\\nexport default App;\"\n      ]\n    ],\n    [\n      \"p\",\n      \"修改 \",\n      [\n        \"code\",\n        \"src/App.css\"\n      ],\n      \"，在文件顶部引入 \",\n      [\n        \"code\",\n        \"antd/dist/antd.css\"\n      ],\n      \"。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"css\",\n        \"highlighted\": \"<span class=\\\"token atrule\\\"><span class=\\\"token rule\\\">@import</span> <span class=\\\"token string\\\">'~antd/dist/antd.css'</span><span class=\\\"token punctuation\\\">;</span></span>\"\n      },\n      [\n        \"code\",\n        \"@import '~antd/dist/antd.css';\"\n      ]\n    ],\n    [\n      \"p\",\n      \"好了，现在你应该能看到页面上已经有了 antd 的蓝色按钮组件，接下来就可以继续选用其他组件开发应用了。其他开发流程你可以参考 create-react-app 的\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://create-react-app.dev/docs/getting-started\"\n        },\n        \"官方文档\"\n      ],\n      \"。\"\n    ],\n    [\n      \"p\",\n      \"我们现在已经把 antd 组件成功运行起来了，开始开发你的应用吧！\"\n    ],\n    [\n      \"h2\",\n      \"高级配置\"\n    ],\n    [\n      \"p\",\n      \"这个例子在实际开发中还有一些优化的空间，比如无法进行主题配置。\"\n    ],\n    [\n      \"p\",\n      \"此时我们需要对 create-react-app 的默认配置进行自定义，这里我们使用 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/gsoft-inc/craco\"\n        },\n        \"craco\"\n      ],\n      \" （一个对 create-react-app 进行自定义配置的社区解决方案）。\"\n    ],\n    [\n      \"p\",\n      \"现在我们安装 craco 并修改 \",\n      [\n        \"code\",\n        \"package.json\"\n      ],\n      \" 里的 \",\n      [\n        \"code\",\n        \"scripts\"\n      ],\n      \" 属性。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"bash\",\n        \"highlighted\": \"$ yarn add @craco/craco\"\n      },\n      [\n        \"code\",\n        \"$ yarn add @craco/craco\"\n      ]\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"diff\",\n        \"highlighted\": \"/* package.json */\\n\\\"scripts\\\": {\\n<span class=\\\"token deleted\\\">-   \\\"start\\\": \\\"react-scripts start\\\",</span>\\n<span class=\\\"token deleted\\\">-   \\\"build\\\": \\\"react-scripts build\\\",</span>\\n<span class=\\\"token deleted\\\">-   \\\"test\\\": \\\"react-scripts test\\\",</span>\\n<span class=\\\"token inserted\\\">+   \\\"start\\\": \\\"craco start\\\",</span>\\n<span class=\\\"token inserted\\\">+   \\\"build\\\": \\\"craco build\\\",</span>\\n<span class=\\\"token inserted\\\">+   \\\"test\\\": \\\"craco test\\\",</span>\\n}\"\n      },\n      [\n        \"code\",\n        \"/* package.json */\\n\\\"scripts\\\": {\\n-   \\\"start\\\": \\\"react-scripts start\\\",\\n-   \\\"build\\\": \\\"react-scripts build\\\",\\n-   \\\"test\\\": \\\"react-scripts test\\\",\\n+   \\\"start\\\": \\\"craco start\\\",\\n+   \\\"build\\\": \\\"craco build\\\",\\n+   \\\"test\\\": \\\"craco test\\\",\\n}\"\n      ]\n    ],\n    [\n      \"p\",\n      \"然后在项目根目录创建一个 \",\n      [\n        \"code\",\n        \"craco.config.js\"\n      ],\n      \" 用于修改默认配置。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"js\",\n        \"highlighted\": \"<span class=\\\"token comment\\\" spellcheck=\\\"true\\\">/* craco.config.js */</span>\\nmodule<span class=\\\"token punctuation\\\">.</span>exports <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// ...</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\"\n      },\n      [\n        \"code\",\n        \"/* craco.config.js */\\nmodule.exports = {\\n  // ...\\n};\"\n      ]\n    ],\n    [\n      \"h3\",\n      \"自定义主题\"\n    ],\n    [\n      \"p\",\n      \"按照 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/docs/react/customize-theme\"\n        },\n        \"配置主题\"\n      ],\n      \" 的要求，自定义主题需要用到类似 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/webpack-contrib/less-loader/\"\n        },\n        \"less-loader\"\n      ],\n      \" 提供的 less 变量覆盖功能。我们可以引入 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/DocSpring/craco-less\"\n        },\n        \"craco-less\"\n      ],\n      \" 来帮助加载 less 样式和修改变量。\"\n    ],\n    [\n      \"p\",\n      \"首先把 \",\n      [\n        \"code\",\n        \"src/App.css\"\n      ],\n      \" 文件修改为 \",\n      [\n        \"code\",\n        \"src/App.less\"\n      ],\n      \"，然后修改样式引用为 less 文件。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"diff\",\n        \"highlighted\": \"/* src/App.js */\\n<span class=\\\"token deleted\\\">- import './App.css';</span>\\n<span class=\\\"token inserted\\\">+ import './App.less';</span>\"\n      },\n      [\n        \"code\",\n        \"/* src/App.js */\\n- import './App.css';\\n+ import './App.less';\"\n      ]\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"diff\",\n        \"highlighted\": \"/* src/App.less */\\n<span class=\\\"token deleted\\\">- @import '~antd/dist/antd.css';</span>\\n<span class=\\\"token inserted\\\">+ @import '~antd/dist/antd.less';</span>\"\n      },\n      [\n        \"code\",\n        \"/* src/App.less */\\n- @import '~antd/dist/antd.css';\\n+ @import '~antd/dist/antd.less';\"\n      ]\n    ],\n    [\n      \"p\",\n      \"然后安装 \",\n      [\n        \"code\",\n        \"craco-less\"\n      ],\n      \" 并修改 \",\n      [\n        \"code\",\n        \"craco.config.js\"\n      ],\n      \" 文件如下。\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"bash\",\n        \"highlighted\": \"$ yarn add craco-less\"\n      },\n      [\n        \"code\",\n        \"$ yarn add craco-less\"\n      ]\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"js\",\n        \"highlighted\": \"<span class=\\\"token keyword\\\">const</span> CracoLessPlugin <span class=\\\"token operator\\\">=</span> <span class=\\\"token function\\\">require</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">'craco-less'</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\nmodule<span class=\\\"token punctuation\\\">.</span>exports <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  plugins<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">[</span>\\n    <span class=\\\"token punctuation\\\">{</span>\\n      plugin<span class=\\\"token punctuation\\\">:</span> CracoLessPlugin<span class=\\\"token punctuation\\\">,</span>\\n      options<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n        lessLoaderOptions<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n          lessOptions<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span>\\n            modifyVars<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token string\\\">'@primary-color'</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'#1DA57A'</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n            javascriptEnabled<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">,</span>\\n          <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n        <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n      <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n    <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\"\n      },\n      [\n        \"code\",\n        \"const CracoLessPlugin = require('craco-less');\\n\\nmodule.exports = {\\n  plugins: [\\n    {\\n      plugin: CracoLessPlugin,\\n      options: {\\n        lessLoaderOptions: {\\n          lessOptions: {\\n            modifyVars: { '@primary-color': '#1DA57A' },\\n            javascriptEnabled: true,\\n          },\\n        },\\n      },\\n    },\\n  ],\\n};\"\n      ]\n    ],\n    [\n      \"p\",\n      \"这里利用了 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/webpack/less-loader#less-options\"\n        },\n        \"less-loader\"\n      ],\n      \" 的 \",\n      [\n        \"code\",\n        \"modifyVars\"\n      ],\n      \" 来进行主题配置，变量和其他配置方式可以参考 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/docs/react/customize-theme\"\n        },\n        \"配置主题\"\n      ],\n      \" 文档。修改后重启 \",\n      [\n        \"code\",\n        \"yarn start\"\n      ],\n      \"，如果看到一个绿色的按钮就说明配置成功了。\"\n    ],\n    [\n      \"p\",\n      \"antd 内建了深色主题和紧凑主题，你可以参照 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/docs/react/customize-theme#使用暗色主题和紧凑主题\"\n        },\n        \"使用暗色主题和紧凑主题\"\n      ],\n      \" 进行接入。\"\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"同样，你可以使用 \",\n        [\n          \"a\",\n          {\n            \"title\": null,\n            \"href\": \"https://github.com/timarney/react-app-rewired\"\n          },\n          \"react-app-rewired\"\n        ],\n        \" 和 \",\n        [\n          \"a\",\n          {\n            \"title\": null,\n            \"href\": \"https://github.com/arackaf/customize-cra\"\n          },\n          \"customize-cra\"\n        ],\n        \" 来自定义 create-react-app 的 webpack 配置。\"\n      ]\n    ],\n    [\n      \"h2\",\n      \"eject\"\n    ],\n    [\n      \"p\",\n      \"你也可以使用 create-react-app 提供的 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://create-react-app.dev/docs/available-scripts/#npm-run-eject\"\n        },\n        \"yarn run eject\"\n      ],\n      \" 命令将所有内建的配置暴露出来。不过这种配置方式需要你自行探索，不在本文讨论范围内。\"\n    ],\n    [\n      \"h2\",\n      \"小结\"\n    ],\n    [\n      \"p\",\n      \"以上是在 create-react-app 中使用 antd 的相关实践，你也可以借鉴此文的做法在自己的 webpack 工作流中使用 antd。\"\n    ],\n    [\n      \"p\",\n      \"上述教程的脚手架源码我们放在 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/ant-design/create-react-app-antd\"\n        },\n        \"create-react-app-antd\"\n      ],\n      \" 中，你可以直接下载使用。\"\n    ],\n    [\n      \"p\",\n      \"接下来我们会介绍如何在 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/docs/react/use-in-typescript\"\n        },\n        \"TypeScript\"\n      ],\n      \" 和 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"/docs/react/practical-projects\"\n        },\n        \"Umi\"\n      ],\n      \" 中使用 antd，欢迎继续阅读。\"\n    ]\n  ],\n  \"meta\": {\n    \"order\": 4,\n    \"title\": \"在 create-react-app 中使用\",\n    \"filename\": \"docs/react/use-with-create-react-app.zh-CN.md\"\n  },\n  \"description\": [\n    \"section\",\n    [\n      \"p\",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/facebookincubator/create-react-app\"\n        },\n        \"create-react-app\"\n      ],\n      \" 是业界最优秀的 React 应用开发工具之一，本文会尝试在 create-react-app 创建的工程中使用 antd 组件，并自定义 webpack 的配置以满足各类工程化需求。\"\n    ]\n  ],\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#安装和初始化\",\n          \"title\": \"安装和初始化\"\n        },\n        \"安装和初始化\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#引入-antd\",\n          \"title\": \"引入 antd\"\n        },\n        \"引入 antd\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#高级配置\",\n          \"title\": \"高级配置\"\n        },\n        \"高级配置\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#eject\",\n          \"title\": \"eject\"\n        },\n        \"eject\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#小结\",\n          \"title\": \"小结\"\n        },\n        \"小结\"\n      ]\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./docs/react/use-with-create-react-app.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);