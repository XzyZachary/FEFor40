Import 和 CommonJS 在 webpack 打包过程中有什么不同
==========


* es6调用commonjs模块   可以直接使用，commonjs不会被webpack的模块系统编译而是会原样输出，并commonjs没有default属性




ES6 module和CommonJS到底有什么区别？
------

module是编译时加载，输出的是接口，commonjs是运行时加载，加载的是一个对象

module输出的是值的引用，commonjs输出的是一个值的拷贝

commonjs 是 require ！！！
moudule  是 import


es6 moduel静态语法支持打包 tree-shaking  commonjs不行
es6 module支持异步加载，commonjs不支持
es6 module语法是静态的，commonjs是动态的
es6 module导入模块是只读的引用，commonjs导入是可变的

