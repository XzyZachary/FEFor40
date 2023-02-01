1、什么是执行上下文？
    每当js代码在运行时 都是在执行上下文运行

    全局执行上下文、函数执行上下文、Eval函数执行上下文

    执行栈  LIFO后进先出数据结构的栈


2、题目
比较下面两段代码，试述两段代码的不同之处
// A--------------------------
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

// B---------------------------
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();



3、add(1)(2)(3)
const add = (a, b, c) => a + b + c;

//参数确定
const curry = (fn) => {
  let args = [];

  return function temp(...newArgs) {
    args.push(...newArgs);
    console.log(23123, fn, newArgs, args)
    if (args.length === fn.length) {
      const val = fn.apply(this, args);
      args = [];
      return val;
    } else {
      return temp;
    }
  };
};

const curryAdd = curry(add);

console.log(curryAdd(1)(2)(3)); // 6