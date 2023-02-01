// 1
// 10 + 1 + 1 12
// 解析
// 加了默认值，则转为严格模式（其实也可以使用 "use strict" 转），这时候参数（a、b、c）与 arguments 没有绑定关系，所以修改 arguments 不会影响到参数（a、b、c）的值，修改参数（a、b、c）也不会影响到 arguments。
// 不加默认值，则为非严格模式，结果和上面的相反。

// 2
// false  min没有参数返回无穷大

// 3
// ƒ  a () {
//     a = 2;
//     console.log(a);
// }
// 解析
// 立即调用的函数表达式（IIFE） 有一个 自己独立的 作用域，如果函数名称与内部变量名称冲突，就会永远执行函数本身；所以上面的结果输出是函数本身；


// 4
// 数组从非 primitive 转为 primitive 的时候会先隐式调用 join 变成“0”
// 应该是隐式调用数组的toString方法。[0].toString() // '0', 只不过这里和[0].join() 产生一样的结果。
// [0].toString() 和 [0].join(',') 和 [0].join() 都返回 '0'
// 顺便说一下，非 primitive 都是通过调用自身的 valueOf、和toString 来进行隐式转换的。
// !![] //true 空数组转换为布尔值是 true,  
// !![0]//true 数组转换为布尔值是 true  
// [0] == true;//false 数组与布尔值比较时却变成了 false  
// Number([])//0  
// Number(false)//0  
// Number(['1'])//1
// 1 == true  //true   1 === Number(true)
// 'true' == true //false Number('true')->NaN  Number(true)->1
// '' = 0//true
// '1' == true//true  Number('1')->1

// 6
// 这里的 yideng 通过 prototype 继承了 company的 address。yideng自己并没有address属性。所以delete操作符的作用是无效的。
// https://github.com/lgwebdream/FE-Interview/issues/44


// 7 
// 注意审题！！！！是bar不是foo

// 9
// a instanceof b 用于检测a是不是b的实例。如果题目f中没有return f,则答案明显为true;而在本题中new f()其返回的结果为f的函数对象，其并不是f的一个实例。
// new f() 返回的是 f 这个函数对象。
// 而 o instanceOf O的实现原理是，检测o的原型链上有没有O.prototype 即 o.proto == O.prototype || o.proto.proto == O.prototype。调试可以看出，两者并不相同。

// 11
// 答案
// A B

// 解析
// C.CMD 推崇依赖就近;AMD 推崇依赖前置
// D.CMD 是延迟执行;AMD 是提前执行
// E.CMD性能好,因为只有用户需要的时候才执行;AMD用户体验好,因为没有延迟,依赖模块提前执行了


// 12
// 答案
// A C

// 解析
// B: include的优先级比 exclude 低；
// D：能避免重新渲染


// 13
// 答案
// yideng is 21 ƒ sayHi(age) {return ${this.name} is ${age};}
// 解析
// 使用两者，我们可以传递我们想要this关键字引用的对象。 但是，.call方法会立即执行！
// .bind方法会返回函数的拷贝值，但带有绑定的上下文！ 它不会立即执行。.bind()()


// 14
// 答案
// [object, false]

// 解析

// 1） typeof 返回一个表示类型的字符串.

//     typeof 的结果列表
//         Undefined "undefined"
//         Null "object"
//         Boolean "boolean"
//         Number "number"
//         String "string"
//         Symbol "symbol"
//         Function "function"
//         Object "object"
// 2）instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上.


// 15
// 答案
// false

// 解析

// f.prototype 是使用使用 new 创建的 f 实例的原型. 而 Object.getPrototypeOf 是 f 函数的原型.
// a === Object.getPrototypeOf(new f()) // true
// b === Function.prototype // true

// 16
// 答案
// 0

// 解析

// filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。
// 也就是说 从 2-4 都是没有初始化的'坑'!, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些'坑'的.
