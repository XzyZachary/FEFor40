// 1
var a1 = {},
  b1 = "123",
  c1 = 123;
a1[b1] = "b";
a1[c1] = "c";
console.log(a1[b1]);
var a2 = {},
  b2 = Symbol("123"),
  c2 = Symbol("123");
a2[b2] = "b";
a2[c2] = "c";
console.log(a2[b2]);
var a3 = {},
  b3 = { key: "123" },
  c3 = { key: "456" };
a3[b3] = "b";
a3[c3] = "c";
console.log(a3[b3]);

// 2
function Foo() {
  Foo.a = function () {
    console.log(1);
  };
  this.a = function () {
    console.log(2);
  };
}
Foo.prototype.a = function () {
  console.log(3);
};
Foo.a = function () {
  console.log(4);
};
Foo.a(); // 
let obj = new Foo(); //
obj.a(); //
Foo.a(); //

// 3
function fn() {
  getValue = function () {
    console.log(1);
  };
  return this;
}
fn.getValue = function () {
  console.log(2);
};
fn.prototype.getValue = function () {
  console.log(3);
};
var getValue = function () {
  console.log(4);
};
function getValue() {
  console.log(5);
}

//请写出以下输出结果：
getValue(); // 
fn().getValue(); // 1
getValue(); // 
new fn.getValue(); //  
new fn().getValue(); //  ！！！！

// 4
const num = parseInt("2*4", 10);
console.log(num);


// 5
const company = { name: "京程一灯" };
Object.defineProperty(company, "address", { value: "北京" });
console.log(company);
console.log(Object.keys(company));
/*
A. {name:"京程一灯",address:"北京"},["name","age"]
B. {name:"京程一灯",address:"北京"},["name"]
C. {name:"京程一灯"},["name","age"]
D. {name:"京程一灯"},["name","age"]
*/


// 6 ？？？？？？
var a = 0;
if (true) {
  a = 10;
  console.log(a, window.a); //
  function a() {}
  console.log(a, window.a);  // 
  a = 20;
  console.log(a, window.a);  //
}
console.log(a);
