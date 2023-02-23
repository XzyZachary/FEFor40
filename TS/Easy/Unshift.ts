// 实现类型版本的 Array.unshift。

type Result5 = Unshift<[1, 2], 0> // [0, 1, 2,]


type Unshift<T extends any[], U> = [U, ...T]
