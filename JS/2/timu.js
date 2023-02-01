// 1
function side(arr) {
    arr[0] = arr[2];
}
function a(a, b, c = 3) {
    c = 10;
    console.log(3321, c, arguments)
    side(arguments);
    return a + b + c;
}
a(1, 1, 1);

// 2
var min = Math.min();
max = Math.max();
console.log(min < max);

// 3
var a = 1;
(function a() {
    a = 2;
    console.log(a);
})();


// 4
var a = [0];
if (a) {
    console.log(a == true);
} else {
    console.log(a);
}


// 5
var fullname = "a";
var obj = {
    fullname: "b",
    prop: {
        fullname: "c",
        getFullname: function () {
            return this.fullname;
        },
    },
};

console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(test());

// 6
var company = {
    address: "beijing",
};
var yideng = Object.create(company);
delete yideng.address;
console.log(yideng.address);

// 7 
var foo = function bar() {
    return 12;
};
console.log(typeof bar());

// 8
var x = 1;
if (function f() { }) {
    x += typeof f;
}
console.log(x);

// 9
function f() {
    return f;
}
console.log(new f() instanceof f);

// 10
var foo = {
    bar: function () {
        return this.baz;
    },
    baz: 1,
};
console.log(typeof (f = foo.bar)());


// 11
关于AMD、CMD规范区别说法正确的是？（多选）
A.AMD规范：是 RequireJS在推广过程中对模块定义的规范化产出的
B.CMD规范：是SeaJS 在推广过程中对模块定义的规范化产出的
C.CMD 推崇依赖前置;AMD 推崇依赖就近
D.CMD 是提前执行;AMD 是延迟执行
E.AMD性能好, 因为只有用户需要的时候才执行; CMD用户体验好, 因为没有延迟, 依赖模块提前执行了


// 12
下面对Vue.js中keep-alive的理解正确的是？（多选）

A.一般结合路由和动态组件一起使用，用于缓存组件；
B.提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 include 的优先级比 exclude 高；
C.对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。
D.keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，但是不能避免重新渲染


// 13
const person = { name: "yideng" };

function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person, 21));
console.log(sayHi.bind(person, 21));

// 14
[typeof null, null instanceof Object]



// 15
function f() {}
const a = f.prototype,
  b = Object.getPrototypeOf(f);
console.log(a === b);

// 16
var arr = [0, 1];
arr[5] = 5;
newArr = arr.filter(function (x) {
  return x === undefined;
});
console.log(newArr.length);

// 17 下面代码中 a 在什么情况下会打印 1
var a = ?;
if(a == 1 && a== 2 && a== 3){
 	console.log(1);
}

//32