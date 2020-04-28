(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{699:function(s,t,a){"use strict";a.r(t);var n=a(92),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果需要使用"),a("code",[s._v("SQLITE")]),s._v("作为数据库， 需要安装gcc的命令。 这里推荐"),a("a",{attrs:{href:"https://sourceforge.net/projects/tdm-gcc/",target:"_blank",rel:"noopener noreferrer"}},[s._v("TDM-GCC"),a("OutboundLink")],1),s._v(", 就此可以支持"),a("code",[s._v("CGO")]),s._v(" 相关的包。")])]),s._v(" "),a("h2",{attrs:{id:"下载编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载编译"}},[s._v("#")]),s._v(" 下载编译")]),s._v(" "),a("p",[s._v("如果您不打算对代码进行任何修改， 可以直接"),a("a",{attrs:{href:"https://github.com/xiusin/pinecms",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),a("OutboundLink")],1),s._v("编译好的安装包， 达到一键部署的目的。")]),s._v(" "),a("h2",{attrs:{id:"修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),a("h4",{attrs:{id:"配置数据库信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置数据库信息"}},[s._v("#")]),s._v(" 配置数据库信息")]),s._v(" "),a("p",[s._v("请复制"),a("code",[s._v("$project/resources/configs/database.yml.dist")]),s._v(" 并且命名为："),a("code",[s._v("database.yml")])]),s._v(" "),a("p",[s._v("在复制好的文件内修改如下配置:")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#dsn: "debian-sys-maint:3Av7BK8pUOaxn0Or@tcp(127.0.0.1:3306)/pinecms?charset=utf8"  mysql链接方式')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dsn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./data.db"')]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sqlite的链接方式")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_prefix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pinecms_"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_driver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqlite3"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置数据库驱动 sqlite3 或者 mysql")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("orm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置orm信息")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("show_sql")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("show_exec_time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_open_conns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_idle_conns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h4",{attrs:{id:"配置application-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置application-yml"}},[s._v("#")]),s._v(" 配置application.yml")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行端口号")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("reload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" true　"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#非开发时期，关闭reload提升性能")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fedirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./resources/themes/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#前端模板目录地址")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bedirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./resources/views/"')]),s._v("　"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#后端模板地址")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("session")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("　"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#session相关")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gosessionid"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("expires")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache_db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./runtime/cache.db"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局缓存数据保存地址 (bbolt)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./runtime/logs/"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志目录，　包括运行日志和数据库日志")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("favicon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(' "./resources/assets/favicon.ico"　\n'),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hashkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"the-big-and-secret-fash-key-here"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bug AES only supports key sizes of 16, 24 or 32 bytes.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("blockkey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lot-secret-of-characters-big-too"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("backend_route_party")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/b"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("max_bodysize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MB")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("upload")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"oss"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#oss or file")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("base_path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"assets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 基本路径")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("statics")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/assets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./resources/assets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/upload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./resources/assets/upload"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h2",{attrs:{id:"运行系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行系统"}},[s._v("#")]),s._v(" 运行系统")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("pinecms.exe serve start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("运行后显示如下信息(关于个人信息部分可以选择删除)：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("│─────────────│────────────────────────│\n│ KEY "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     │ VAL                    │\n│─────────────│────────────────────────│\n│ Name        │ xiusin                 │\n│ Version     │ Development            │\n│ Author      │ xiusin                 │\n│ WebSite     │ http://www.xiusin.com/ │\n│ PineVersion │ dev "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(".1              │\n│ Version     │ dev "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v(".2              │\n│ GoVersion   │ go1.14                 │\n│─────────────│────────────────────────│\n   ___  _\n  / _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("__  ___\n / ___/ / _ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("/ -_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n/_/  /_/_//_/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("__/\n\nServer now listening on: http://0.0.0.0:2019/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("至此, 我们到这里算是已经完全启动了服务.")]),s._v(" "),a("h2",{attrs:{id:"进入后台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进入后台"}},[s._v("#")]),s._v(" 进入后台")]),s._v(" "),a("p",[s._v("在浏览器上输入地址: "),a("code",[s._v("http://localhost:2019/b/login/index")]),s._v(" 然后登录界面管理自己的网站内容.")]),s._v(" "),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),a("p",[s._v("这里并没有像其他CMS一样启动install 安装配置目录.")])])}),[],!1,null,null,null);t.default=e.exports}}]);