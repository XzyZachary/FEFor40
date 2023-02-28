// 实现一个像 Lodash.without 函数一样的泛型 Without<T, U>，它接收数组类型的 T 和数字或数组类型的 U 为参数，会返回一个去除 U 中元素的数组 T。

// 例如：

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type ToUnion<T> = T extends any[] ? T[number] : T;


type Without<T extends unknown[], U extends number | unknown[]> = T extends [infer R, ...infer Rest] ? R extends ToUnion<U> ? Without<Rest, U> : [R, ...Without<Rest, U>]  : T