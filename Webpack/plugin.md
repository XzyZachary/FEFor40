Webpack里面的插件是怎么实现的
=================

* webpack本质是一种事件流机制，核心模块：tapable（Sync + Async）Hooks构造出 =》 Compiler（编译）+ Compilation（创建bundles）
* compiler对象代表了完整的webpack环境配置，这个对象在启动webpack时被一次性建立，并配置好所有可操作的设置，包括options，loader 和plugin。当在webpack环境中应用一个插件时，插件将收到此compiler对象的引用，可以使用它在webpack的主环境
* compilation对象代表一次资源版本构建，当运行webpack开发环境中间件时，每当检测到一个文件变化，就会创建一个新的compilation，从而生成一组新的编译资源，一个compilation对象表现了当前的模块资源，编译生成资源，变化的文件、以及被跟踪依赖的状态信息。compilation对象提供很多关键时机的回调，以供插件做自定义处理时选择使用。
* 创建一个插件函数，在其prototype上定义apply方法，指定一个绑定到webpack自身的事件钩子
* 函数内，处理webpack内部实例的特定数据
* 处理完成后，调用webpack提供的回调