// 获取数组的中间元素

// 通过实现一个 GetMiddleElement 方法，获取数组的中间元素，用数组表示

// 如果数组的长度为奇数，则返回中间一个元素 如果数组的长度为偶数，则返回中间两个元素


type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]> // 返回 [3]
type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // 返回 [3, 4]


type GetMiddleElement<T> = T extends [unknown, infer Head, ...infer Tail, unknown] ? GetMiddleElement<[Head, ...Tail]> : T


type GetMiddleElement3<T extends unknown[] = []> = T['length'] extends 2 | 1 ? T :  T extends [infer L, ...infer M, infer R] ?  GetMiddleElement<M> : []