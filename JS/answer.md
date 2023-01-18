
* 数字做对象的key会转成字符串, 所以a1 = { '123': 'c' }
a2 = { Symbol(123): 'b', Symbol(123): 'c' }, Symbol是唯一的, 所以a2[b2] = b
a3 = { [object Object]: 'c' } obj做key会调用toString方法


* 4
parseInt 检查字符串中的字符是否合法. 一旦遇到一个在指定进制中不合法的字符后，立即停止解析并且忽略后面所有的字符。
*就是不合法的数字字符。所以只解析到 2，并将其解析为十进制的2. num的值即为 2


* 5
答案
B
解析
通过 defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。而我们使用 defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). Object.keys方法仅返回对象中 可枚举(enumerable) 的属性，因此只剩下了 name
用 defineProperty方法添加的属性默认不可变。你可以通过 writable, configurable 和 enumerable属性来改变这一行为。这样的话， 相比于自己添加的属性， defineProperty方法添加的属性有了更多的控制权。


* import命令是编译阶段执行的，在代码运行之前。因此这意味着被导入的模块会先运行，而导入模块的文件会后执行。
这是CommonJS中require（）和 import之间的区别。使用 require()，可以在运行代码时根据需要加载依赖项。如果我们使用 require而不是import，则running index.js、running sum.js、 3会被依次打印。


* push()方法返回新数组的长度


```javascript
function yideng() {}
const a = {},
b = Object.prototype;
console.log(a.prototype === b); // 
console.log(Object.getPrototypeOf(a) === b);
console.log(yideng.prototype === Object.getPrototypeOf(yideng));
```

proto 隐式原型  prototype 显示原型

- 显示原型
每一个函数在创建之后都会拥有一个名为protoytpe的属性，这个属性指向函数的原型对象
需要注意的是，通过Function.prototype.bind方法构造出来的函数是一个例外，他没有prototype属性

- 隐式原型
javascript中任意对象都有一个内置属性[[prototype]], 在es5之前没有标准的方法访问这个内置属性，但是大多浏览器支持通过__proto__来访问，es5有了对于这个内置属性标准的get方法Object.getPrototypeOf()

注意： Object.prototype这个对象是例外，它的__proto__值为null

作用
- 显示原型：用来实现基于原型的继承与属性的共享
- 隐式原型：构成原型链，同样用于实现基于原型的继承，举个例子，当我们访问obj对象中的x属性时，如果obj找不到，那就沿着proto依次查找

1）a.prototype === b => false
prototype属性是只有函数才特有的属性，当你创建一个函数时，js会自动为这个函数加上prototype属性，值是一个空对象，而实例对象是没有prototype属性，所以a.prototype是undefined

2）Object.getPrototypeOf(a) === b  => true
首先要明确对象和构造函数的关系，对象在创建的时候，其__proto__会指向其构造函数的prototype属性

Object实际是一个构造函数，（typeof Object的结果为function） 使用其字面量创建对象和new Object创建对象一样的，所以a.__proto__也就是Object.prototype，所以Object.getPrototypeOf(a)与a.__proto是一样的，所以为true

3）yideng.prototype === Object.getPrototypeOf(yideng) =>false
f.prototype === Object.getPrototypeOf(new f()) // true
Object.getPrototypeOf(f) === Function.prototype; //true



2-5
test方法的参数会被调用toString强制转换成字符串
此题转换的字符串是null、undefined


2-6
答案  
true false true  
解析  
1）exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。  
2）但是在Javascript中使用exec进行正则表达式全局匹配时要注意：  
&ensp;&ensp;①在全局模式下，当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把正则表达式对象的  
&ensp;&ensp;②lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。  
&ensp;&ensp;③这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。  
&ensp;&ensp;④当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。  
3）所以在全局模式下，如果在一个字符串中完成了一次模式匹配之后要开始检索新的字符串，就必须手动地把 lastIndex 属性重置为 0。



!!!!        reverse 方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用。


2-8  ！！！！！f.b没理解
答案  
yideng xuetang yideng 报错 
解析  
1）F.a() F.b()  
F是构造函数，而f是构造函数F的一个实例
因为 F instanceof Object === true、F instanceof Function === true  
2) f.a() f.b()
f并不是function的实例，因为他本来就不是构造函数，调用的是Function原型链上相关的属性和方法，只能访问Object原型链，
所以f.b()会报错





2-9  
答案  
[false,false,false,true,true]
解析  
比较大小会先转换成字符串在进行对比，字符串比较则是使用基于标准字典的 Unicode ，符串按照字典顺序进行比较。JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。
所以这里 "1,2,3" < "1,2,4",输出true,因为前边的字符的unicode码点都相等，所以最后是比较3和4的unicode码点。而3的Unicode码点是51,4的uniCode码点是52，所以a<c。  

案例中将操作符两边都转为字符编码再进行比较  
'2'.charCodeAt()                         // 50  
'11'.charCodeAt()                        // 49

优先调用toString 其次再是valueOf() 都没有的话那就是类型错误异常警告



2-10

null转换成number是0，所以  null >= 0,   null == 0 null在做相等判断的时候，不进行转型


2-11  
sort()会改变原数组


2-12
[] == ![] ????  ![] 是false



?? 空值合并操作符， 当左侧值为null或者undefined  返回？？符号右边的值


window.length 是0

2-13  
[0, 1, undefined, 3]  
[0, 1, undefined, 3]  
Array.from(伪数组对象, 可迭代对象)，Array.prototype.slice.call(伪数组对象)能把类数组对象转化成数组，arrLike规定了长度4的数组。



for..in 会便利对象和对象原型链中的可枚举属性
Object.keys 只会遍历对象可枚举属性