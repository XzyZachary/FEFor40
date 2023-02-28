// Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]


// 使用一个变量来记录当前Chunk内容，当达到数量时就释放

// C['lenght'] extends N 判断C的长度有咩有达到要求的数量

// 有的话就放入数组里，继续递归后续内容，等待返回结果

// 没有的话就继续往这个临时数组里添加新的元素，作为C的新值，继续递归


type Chunk<T, N extends number = 1, C extends unknown[] = []> = T extends [infer R, ...infer U] ? C['length'] extends N ? [C, ...Chunk<T, N>] : Chunk<U, N, [...C, R]> : C extends [] ?  C : [C]
