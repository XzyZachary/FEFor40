// 1
flattenDeep([1, [2, [3, [4]], 5]]); //[1, 2, 3, 4, 5]

function flattenDeep(data, array = []) {
  console.log(33, data, array);
  data.forEach((item) => {
    if (Array.isArray(item)) {
      flattenDeep(item, array);
    } else {
      array.push(item);
    }
  });
  return array;
}

// 2
// new 操作符都做了什么，并手动实现一下

function newB(fun, ...args) {
  const obj = Object.create(fun.prototype);
  const result = fun.apply(obj, args);
  return result instanceof Object ? result : obj;
}

// 3
// 完成 plus 函数，通过全部的测试用例
function plus(n) {}
module.exports = plus;
// 测试用例如下
("use strict");
var assert = require("assert");
var plus = require("../lib/assign-4");
describe("测试用例", function () {
  it("plus(0) === 0", function () {
    assert.equal(0, plus(0).toString());
  });
  it("plus(1)(1)(2)(3)(5) === 12", function () {
    assert.equal(12, plus(1)(1)(2)(3)(5).toString());
  });
  it("plus(1)(4)(2)(3) === 10", function () {
    assert.equal(10, plus(1)(4)(2)(3).toString());
  });
  it("plus(1,1)(2,2)(3)(4) === 13", function () {
    assert.equal(13, plus(1, 1)(2, 2)(3)(4).toString());
  });
});

function plus(n) {
  var _args = [].slice.call(arguments);
  console.log(23123, _args, arguments);
  var _adder = function () {
    _args.push(...arguments);
    return _adder;
  };

  _adder.toString = function () {
    return _args.reduce((a, b) => a + b);
  };
  return _adder;
}

// 4

function yideng() {}
const a = {},
  b = Object.prototype;
console.log(a.prototype === b); //
console.log(Object.getPrototypeOf(a) === b);
console.log(yideng.prototype === Object.getPrototypeOf(yideng));

// 5
const lowerCaseOnly = /^[a-z]+$/;
console.log(lowerCaseOnly.test("yideng"));
console.log(lowerCaseOnly.test(null));
console.log(lowerCaseOnly.test());

// 6
function captureOne(re, str) {
  var match = re.exec(str);
  console.log(3132, match);
  return match && match[1];
}
var numRe = /num=(\d+)/gi,
  wordRe = /yideng=(\w+)/i,
  a1 = captureOne(numRe, "num=1"),
  a2 = captureOne(wordRe, "yideng=1"),
  a3 = captureOne(numRe, "NUM=2"),
  a4 = captureOne(wordRe, "YIDENG=2"),
  a5 = captureOne(numRe, "Num=3"),
  a6 = captureOne(wordRe, "YiDeng=3");
console.log(a1, a2);
console.log(a3, a4);
console.log(a5, a6);

// 7 ？？？？？？？？？
function yideng(n, o) {
    console.log(o); // ？
    return {
      yideng: function (m) {
        return yideng(m, n);
      },
    };
  }
//   const a = yideng(0); // 0
//   a.yideng(1); // 1 undefined
//   a.yideng(2); // 2 undefined
//   a.yideng(3); // 3 undefined
//   const b = yideng(0).yideng(1).yideng(2).yideng(3);
//   const c = yideng(0).yideng(1);
//   c.yideng(2);
//   c.yideng(3);


// 8

var F = function () {};
Object.prototype.a = function () {
  console.log("yideng");
};
Function.prototype.b = function () {
  console.log("xuetang");
};
var f = new F();
F.a();
F.b();
f.a();
f.b();



// 9
const f = [1, 2, 3],
  g = [1, 2, 3],
  c = [1, 2, 4],
  d = "2",
  e = "11";
console.log([f == g, g === f, f > c, f < c, d > e]);



// 10
console.log(null == 0);
console.log(null <= 0);
console.log(null < 0);


// 11
const arr1 = ['a', 'b', 'c'];
const arr2 = ['b', 'c', 'a'];
console.log(
  arr1.sort() === arr1,
  arr2.sort() == arr2,
  arr1.sort() === arr2.sort()
);

// 12
let a1 = [];
let b1 = "0";
console.log(a1 == 0);
console.log(a1 == !a1);
console.log(b1 == 0);
console.log(a1 == b1);

// 13

const arrLike = {
    length:4,
    0:0,
    1:1,
    '-1':2,
    3:3,
    4:4,
  }
  console.log(Array.from(arrLike));
  console.log(Array.prototype.slice.call(arrLike));