(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/upload/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/index.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/index.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"content\": [\n    \"section\",\n    [\n      \"p\",\n      \"文件选择上传和拖拽上传控件。\"\n    ],\n    [\n      \"h2\",\n      \"何时使用\"\n    ],\n    [\n      \"p\",\n      \"上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当需要上传一个或一些文件时。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当需要展现上传的进度时。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"当需要使用拖拽交互时。\"\n        ]\n      ]\n    ]\n  ],\n  \"meta\": {\n    \"category\": \"Components\",\n    \"subtitle\": \"上传\",\n    \"type\": \"数据录入\",\n    \"title\": \"Upload\",\n    \"cover\": \"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg\",\n    \"filename\": \"components/upload/index.zh-CN.md\"\n  },\n  \"toc\": [\n    \"ul\",\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#何时使用\",\n          \"title\": \"何时使用\"\n        },\n        \"何时使用\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#API\",\n          \"title\": \"API\"\n        },\n        \"API\"\n      ]\n    ],\n    [\n      \"li\",\n      [\n        \"a\",\n        {\n          \"className\": \"bisheng-toc-h2\",\n          \"href\": \"#FAQ\",\n          \"title\": \"FAQ\"\n        },\n        \"FAQ\"\n      ]\n    ]\n  ],\n  \"api\": [\n    \"section\",\n    [\n      \"h2\",\n      \"API\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ],\n          [\n            \"th\",\n            \"版本\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"accept\"\n          ],\n          [\n            \"td\",\n            \"接受上传的文件类型, 详见 \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept\"\n              },\n              \"input accept Attribute\"\n            ]\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"action\"\n          ],\n          [\n            \"td\",\n            \"上传的地址\"\n          ],\n          [\n            \"td\",\n            \"string \",\n            \"|\",\n            \" (file) => Promise\",\n            \"<\",\n            \"string>\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"beforeUpload\"\n          ],\n          [\n            \"td\",\n            \"上传文件之前的钩子，参数为上传的文件，若返回 \",\n            [\n              \"code\",\n              \"false\"\n            ],\n            \" 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 \",\n            [\n              \"code\",\n              \"File\"\n            ],\n            \" 或 \",\n            [\n              \"code\",\n              \"Blob\"\n            ],\n            \" 对象则上传 resolve 传入对象）；也可以返回 \",\n            [\n              \"code\",\n              \"Upload.LIST_IGNORE\"\n            ],\n            \"，此时列表中将不展示此文件。 \",\n            [\n              \"strong\",\n              \"注意：IE9 不支持该方法\"\n            ]\n          ],\n          [\n            \"td\",\n            \"(file, fileList) => boolean \",\n            \"|\",\n            \" Promise\",\n            \"<\",\n            \"File> \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"Upload.LIST_IGNORE\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"customRequest\"\n          ],\n          [\n            \"td\",\n            \"通过覆盖默认的上传行为，可以自定义自己的上传实现\"\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"data\"\n          ],\n          [\n            \"td\",\n            \"上传所需额外参数或返回上传额外参数的方法\"\n          ],\n          [\n            \"td\",\n            \"object\",\n            \"|\",\n            \"(file) => object \",\n            \"|\",\n            \" Promise\",\n            \"<\",\n            \"object>\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"defaultFileList\"\n          ],\n          [\n            \"td\",\n            \"默认已经上传的文件列表\"\n          ],\n          [\n            \"td\",\n            \"object\",\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"directory\"\n          ],\n          [\n            \"td\",\n            \"支持上传文件夹（\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://caniuse.com/#feat=input-file-directory\"\n              },\n              \"caniuse\"\n            ],\n            \"）\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"disabled\"\n          ],\n          [\n            \"td\",\n            \"是否禁用\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"fileList\"\n          ],\n          [\n            \"td\",\n            \"已经上传的文件列表（受控），使用此参数时，如果遇到 \",\n            [\n              \"code\",\n              \"onChange\"\n            ],\n            \" 只调用一次的问题，请参考 \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://github.com/ant-design/ant-design/issues/2423\"\n              },\n              \"#2423\"\n            ]\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"#UploadFile\"\n              },\n              \"UploadFile\"\n            ],\n            \"[\",\n            \"]\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"headers\"\n          ],\n          [\n            \"td\",\n            \"设置上传的请求头部，IE10 以上有效\"\n          ],\n          [\n            \"td\",\n            \"object\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"iconRender\"\n          ],\n          [\n            \"td\",\n            \"自定义显示 icon\"\n          ],\n          [\n            \"td\",\n            \"(file: UploadFile, listType?: UploadListType) => ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"isImageUrl\"\n          ],\n          [\n            \"td\",\n            \"自定义缩略图是否使用 \",\n            \"<\",\n            \"img /> 标签进行显示\"\n          ],\n          [\n            \"td\",\n            \"(file: UploadFile) => boolean\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68\"\n              },\n              \"(内部实现)\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"itemRender\"\n          ],\n          [\n            \"td\",\n            \"自定义上传列表项\"\n          ],\n          [\n            \"td\",\n            \"(originNode: ReactElement, file: UploadFile, fileList: object\",\n            \"[\",\n            \"], actions: { download: function, preview: function, remove: function }) => React.ReactNode\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.16.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"listType\"\n          ],\n          [\n            \"td\",\n            \"上传列表的内建样式，支持三种基本样式 \",\n            [\n              \"code\",\n              \"text\"\n            ],\n            \", \",\n            [\n              \"code\",\n              \"picture\"\n            ],\n            \" 和 \",\n            [\n              \"code\",\n              \"picture-card\"\n            ]\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"text\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"maxCount\"\n          ],\n          [\n            \"td\",\n            \"限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.10.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"method\"\n          ],\n          [\n            \"td\",\n            \"上传请求的 http method\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"post\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"multiple\"\n          ],\n          [\n            \"td\",\n            \"是否支持多选文件，\",\n            [\n              \"code\",\n              \"ie10+\"\n            ],\n            \" 支持。开启后按住 ctrl 可选择多个文件\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"name\"\n          ],\n          [\n            \"td\",\n            \"发到后台的文件参数名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"file\"\n            ]\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"openFileDialogOnClick\"\n          ],\n          [\n            \"td\",\n            \"点击打开文件对话框\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"previewFile\"\n          ],\n          [\n            \"td\",\n            \"自定义文件预览逻辑\"\n          ],\n          [\n            \"td\",\n            \"(file: File \",\n            \"|\",\n            \" Blob) => Promise\",\n            \"<\",\n            \"dataURL: string>\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"progress\"\n          ],\n          [\n            \"td\",\n            \"自定义进度条样式\"\n          ],\n          [\n            \"td\",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"/components/progress/#API\"\n              },\n              \"ProgressProps\"\n            ],\n            \"（仅支持 \",\n            [\n              \"code\",\n              \"type=\\\"line\\\"\"\n            ],\n            \"）\"\n          ],\n          [\n            \"td\",\n            \"{ strokeWidth: 2, showInfo: false }\"\n          ],\n          [\n            \"td\",\n            \"4.3.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"showUploadList\"\n          ],\n          [\n            \"td\",\n            \"是否展示文件列表, 可设为一个对象，用于单独设定 \",\n            [\n              \"code\",\n              \"showPreviewIcon\"\n            ],\n            \", \",\n            [\n              \"code\",\n              \"showRemoveIcon\"\n            ],\n            \", \",\n            [\n              \"code\",\n              \"showDownloadIcon\"\n            ],\n            \", \",\n            [\n              \"code\",\n              \"removeIcon\"\n            ],\n            \" 和 \",\n            [\n              \"code\",\n              \"downloadIcon\"\n            ]\n          ],\n          [\n            \"td\",\n            \"boolean \",\n            \"|\",\n            \" { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: ReactNode \",\n            \"|\",\n            \" (file: UploadFile) => ReactNode, downloadIcon?: ReactNode \",\n            \"|\",\n            \" (file: UploadFile) => ReactNode }\"\n          ],\n          [\n            \"td\",\n            \"true\"\n          ],\n          [\n            \"td\",\n            \"function: 4.7.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"withCredentials\"\n          ],\n          [\n            \"td\",\n            \"上传请求时是否携带 cookie\"\n          ],\n          [\n            \"td\",\n            \"boolean\"\n          ],\n          [\n            \"td\",\n            \"false\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onChange\"\n          ],\n          [\n            \"td\",\n            \"上传文件改变时的状态，详见 \",\n            [\n              \"a\",\n              {\n                \"title\": null,\n                \"href\": \"#onChange\"\n              },\n              \"onChange\"\n            ]\n          ],\n          [\n            \"td\",\n            \"function\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onDrop\"\n          ],\n          [\n            \"td\",\n            \"当文件被拖入上传区域时执行的回调功能\"\n          ],\n          [\n            \"td\",\n            \"(event: React.DragEvent) => void\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\",\n            \"4.16.0\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onDownload\"\n          ],\n          [\n            \"td\",\n            \"点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页\"\n          ],\n          [\n            \"td\",\n            \"function(file): void\"\n          ],\n          [\n            \"td\",\n            \"(跳转新标签页)\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onPreview\"\n          ],\n          [\n            \"td\",\n            \"点击文件链接或预览图标时的回调\"\n          ],\n          [\n            \"td\",\n            \"function(file)\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ],\n          [\n            \"td\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"onRemove  \"\n          ],\n          [\n            \"td\",\n            \"点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除              \"\n          ],\n          [\n            \"td\",\n            \"function(file): boolean \",\n            \"|\",\n            \" Promise\"\n          ],\n          [\n            \"td\",\n            \"-  \"\n          ],\n          [\n            \"td\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"UploadFile\"\n    ],\n    [\n      \"p\",\n      \"继承自 File，附带额外属性用于渲染。\"\n    ],\n    [\n      \"table\",\n      [\n        \"thead\",\n        [\n          \"tr\",\n          [\n            \"th\",\n            \"参数\"\n          ],\n          [\n            \"th\",\n            \"说明\"\n          ],\n          [\n            \"th\",\n            \"类型\"\n          ],\n          [\n            \"th\",\n            \"默认值\"\n          ]\n        ]\n      ],\n      [\n        \"tbody\",\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"name\"\n          ],\n          [\n            \"td\",\n            \"文件名\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"percent\"\n          ],\n          [\n            \"td\",\n            \"上传进度\"\n          ],\n          [\n            \"td\",\n            \"number\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"status\"\n          ],\n          [\n            \"td\",\n            \"上传状态，不同状态展示颜色也会有所不同\"\n          ],\n          [\n            \"td\",\n            [\n              \"code\",\n              \"error\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"success\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"done\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"uploading\"\n            ],\n            \" \",\n            \"|\",\n            \" \",\n            [\n              \"code\",\n              \"removed\"\n            ]\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"thumbUrl\"\n          ],\n          [\n            \"td\",\n            \"缩略图地址\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"uid\"\n          ],\n          [\n            \"td\",\n            \"唯一标识符，不设置时会自动生成\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ],\n        [\n          \"tr\",\n          [\n            \"td\",\n            \"url\"\n          ],\n          [\n            \"td\",\n            \"下载地址\"\n          ],\n          [\n            \"td\",\n            \"string\"\n          ],\n          [\n            \"td\",\n            \"-\"\n          ]\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"onChange\"\n    ],\n    [\n      \"blockquote\",\n      [\n        \"p\",\n        \"上传中、完成、失败都会调用这个函数。\"\n      ]\n    ],\n    [\n      \"p\",\n      \"文件状态改变的回调，返回为：\"\n    ],\n    [\n      \"pre\",\n      {\n        \"lang\": \"js\",\n        \"highlighted\": \"<span class=\\\"token punctuation\\\">{</span>\\n  file<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">/* ... */</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  fileList<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">[</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">/* ... */</span> <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n  event<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">/* ... */</span> <span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span>\"\n      },\n      [\n        \"code\",\n        \"{\\n  file: { /* ... */ },\\n  fileList: [ /* ... */ ],\\n  event: { /* ... */ },\\n}\"\n      ]\n    ],\n    [\n      \"ol\",\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"code\",\n            \"file\"\n          ],\n          \" 当前操作的文件对象。\"\n        ],\n        [\n          \"pre\",\n          {\n            \"lang\": \"js\",\n            \"highlighted\": \"<span class=\\\"token punctuation\\\">{</span>\\n   uid<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'uid'</span><span class=\\\"token punctuation\\\">,</span>      <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突</span>\\n   name<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'xx.png'</span>   <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// 文件名</span>\\n   status<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'done'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// 状态有：uploading done error removed，被 beforeUpload 拦截的文件没有 status 属性</span>\\n   response<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'{\\\"status\\\": \\\"success\\\"}'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// 服务端响应内容</span>\\n   linkProps<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token string\\\">'{\\\"download\\\": \\\"image\\\"}'</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token comment\\\" spellcheck=\\\"true\\\">// 下载链接额外的 HTML 属性</span>\\n<span class=\\\"token punctuation\\\">}</span>\"\n          },\n          [\n            \"code\",\n            \"{\\n   uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突\\n   name: 'xx.png'   // 文件名\\n   status: 'done', // 状态有：uploading done error removed，被 beforeUpload 拦截的文件没有 status 属性\\n   response: '{\\\"status\\\": \\\"success\\\"}', // 服务端响应内容\\n   linkProps: '{\\\"download\\\": \\\"image\\\"}', // 下载链接额外的 HTML 属性\\n}\"\n          ]\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"code\",\n            \"fileList\"\n          ],\n          \" 当前的文件列表。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          [\n            \"code\",\n            \"event\"\n          ],\n          \" 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。\"\n        ]\n      ]\n    ],\n    [\n      \"h2\",\n      \"FAQ\"\n    ],\n    [\n      \"h3\",\n      \"服务端如何实现？\"\n    ],\n    [\n      \"ul\",\n      [\n        \"li\",\n        [\n          \"p\",\n          \"服务端上传接口实现可以参考 \",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://github.com/blueimp/jQuery-File-Upload/wiki#server-side\"\n            },\n            \"jQuery-File-Upload\"\n          ],\n          \"。\"\n        ]\n      ],\n      [\n        \"li\",\n        [\n          \"p\",\n          \"如果要做本地 mock 可以参考这个 \",\n          [\n            \"a\",\n            {\n              \"title\": null,\n              \"href\": \"https://github.com/react-component/upload/blob/master/server.js\"\n            },\n            \"express 的例子\"\n          ],\n          \"。\"\n        ]\n      ]\n    ],\n    [\n      \"h3\",\n      \"如何显示下载链接？\"\n    ],\n    [\n      \"p\",\n      \"请使用 fileList 属性设置数组项的 url 属性进行展示控制。\"\n    ],\n    [\n      \"h3\",\n      [\n        \"code\",\n        \"customRequest\"\n      ],\n      \" 怎么使用？\"\n    ],\n    [\n      \"p\",\n      \"请参考 \",\n      [\n        \"a\",\n        {\n          \"title\": null,\n          \"href\": \"https://github.com/react-component/upload#customrequest\"\n        },\n        \"https://github.com/react-component/upload#customrequest\"\n      ],\n      \"。\"\n    ],\n    [\n      \"h3\",\n      \"为何 \",\n      [\n        \"code\",\n        \"fileList\"\n      ],\n      \" 受控时，上传不在列表中的文件不会触发 \",\n      [\n        \"code\",\n        \"onChange\"\n      ],\n      \" 后续的 \",\n      [\n        \"code\",\n        \"status\"\n      ],\n      \" 更新事件？\"\n    ],\n    [\n      \"p\",\n      [\n        \"code\",\n        \"onChange\"\n      ],\n      \" 事件仅会作用于在列表中的文件，因而 \",\n      [\n        \"code\",\n        \"fileList\"\n      ],\n      \" 不存在对应文件时后续事件会被忽略。请注意，在 \",\n      [\n        \"code\",\n        \"4.13.0\"\n      ],\n      \" 版本之前受控状态存在 bug 导致不在列表中的文件也会触发。\"\n    ],\n    [\n      \"h3\",\n      [\n        \"code\",\n        \"onChange\"\n      ],\n      \" 为什么有时候返回 File 有时候返回 { originFileObj: File }？\"\n    ],\n    [\n      \"p\",\n      \"历史原因，在 \",\n      [\n        \"code\",\n        \"beforeUpload\"\n      ],\n      \" 返回 \",\n      [\n        \"code\",\n        \"false\"\n      ],\n      \" 时，会返回 File 对象。在下个大版本我们会统一返回 \",\n      [\n        \"code\",\n        \"{ originFileObj: File }\"\n      ],\n      \" 对象。当前版本已经兼容所有场景下 \",\n      [\n        \"code\",\n        \"info.file.originFileObj\"\n      ],\n      \" 获取原 File 写法。你可以提前切换。\"\n    ]\n  ]\n};\n\n//# sourceURL=webpack:///./components/upload/index.zh-CN.md?./node_modules/bisheng/lib/loaders/source-loader.js");

/***/ })

}]);