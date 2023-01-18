热更新原理
------

1. 基础概念
    * Webpack Compiler 将js编译成Bundle
    * Bundle Server 提供文件在浏览器的访问，实际就是一个服务器
    * HMR Server 将热更新的文件输出给HMR Runtime
    * HMR Runtime 会被注入到bundle.js中，将HRM Server通过websocket链接，接受文件变化，并更新对应文件
    * bundle.js 构建输出的文件

2. 原理
    * 启动阶段
        + webpack compiler将对应文件打包成bundle.js 包含注入的HMR Server 发送给Bundler Server
        + 浏览器即可以访问服务器的方式获取bundle.js
    * 更新阶段
        + Webpack Compiler重新编译，发送给HMR Server
        + HMR  Server可以知道哪些资源，哪些模块发生了变化，通知HMR Runtime
        + HMR Runtime更新代码

3. HMR原理详解
    使用webpack-dev-server去启动本地服务，内部实现主要使用了webpack，express, websocket

    * 使用express启动本地服务，当浏览器访问资源时对此做响应
    * 服务端和客户端使用webscoket实现长链接
    * webpack监听源文件的变化，即当开发者保存文件时出发webpack的重新编译
        + 每次编译都会生成hash值，已改动模块的json文件，已改动模块代码的js文件
        + 编译完成后通过socket向客户端推送当前编译的hash戳
    * 客户端的websocket监听到有文件改动推送过来的hash戳，会和上一次对比
        + 一致走缓存
        + 不一致的则通过ajax和jsonp向服务器获取最新资源
    * 使用内存文件系统去替换有修改的内容实现局部刷新
