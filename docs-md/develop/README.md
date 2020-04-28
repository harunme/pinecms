# 概述
::: warning 注意
此页面是基于有二次开发需求为前置条件
:::

如果您的项目不是简单的企业站项目, 那么您就需要对代码进行二次开发

> 期望您在项目中自主开发的模块以及有用的功能共享出来合并到仓库, 感激不尽.  


# PineCMS 软件使用协议

感谢您选择PineCMS内容管理框架, 希望我们的产品能够帮您把网站发展的更快、更好、更强！你可以免费使用`PineCMS`进行个人、学习、商业等项目的开发，您可以参与优化代码和PR提交. 助于代码逻辑精简和性能提高. 出于这样决定的原因是希望项目逐渐变成很好的内容框架, 防止代码分歧以及版本冲突. `毕竟众人拾柴火焰高嘛`

PineCMS框架的唯一网址: `http://pinecms.xyz/`


# PINECMS免责声明

1、使用PINECMS构建的网站的任何信息内容以及导致的任何版权纠纷和法律争议及后果，PINECMS不承担任何责任。
2、您一旦安装使用PINECMS，即被视为完全理解并接受本协议的各项条款，在享有上述条款授予的权力的同时，受到相关的约束和限制。

WooCMS的环境要求如下：

# 基础开发环境
:::tip 环境需求
1. GO >= 1.11+ (支持`go.mod`)
2. MYSQL 
3. 如果需要使用`sqlite`内嵌数据库需要支持`CGO`
:::

# 源代码
一般情况下, 您二次开发只需要关注目录下`src`目录, 这里包含前后端源代码.

# 入口
您可以在目录`cmd` 下找到 `start.go` 这里是项目的入口方法文件:

```go
func main() {
    ...
    config.Server()
}
``` 

上面Server方法就是整个CMS项目启动入口, 您可以从此处开始追踪代码逻辑, 下面, 您可以继续阅读文档开发相关模块. 

:::warning 跪求警告
PineCMS是基于作者自己开发的`Pine`框架开发, 您需要稍微阅读以下框架代码进行二次开发.  如果您熟悉`gin`或`iris`基本在一杯茶的时间即可上手.
 
框架地址: [xiusin/pine](https://github.com/xiusin/pine.git) 

如果您代码有更清晰的代码逻辑和开源精神, 请加入我参与开发. 

(Tips: 我始终感觉代码排版太low 😭, 期待大神跟提供代码编程规范以及注释)
:::

