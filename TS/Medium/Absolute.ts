// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

type Test1 = -100;
type Result1 = Absolute<Test1>; // expected to be "100"

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Tail}` ? Tail : `${T}`