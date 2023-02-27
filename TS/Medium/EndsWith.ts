// 实现EndsWith<T, U>,接收两个string类型参数,然后判断T是否以U结尾,根据结果返回true或false

// 例如:

type a1 = EndsWith<'abc', 'bc'> // expected to be true
type b2 = EndsWith<'abc', 'abc'> // expected to be true
type c3 = EndsWith<'abc', 'd'> // expected to be false


type EndsWith<T, U extends string> = T extends `${string}${U}` ? true : false;