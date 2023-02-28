// Reverse

// 实现类型版本的数组反转 Array.reverse

// 例如：

type a4 = Reverse<['a', 'b']> // ['b', 'a']
type b3 = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']


type Reverse<T extends any[], R extends any[] = []> = T extends [...infer O, infer E] ? Reverse<O, [...R, E]> :  R