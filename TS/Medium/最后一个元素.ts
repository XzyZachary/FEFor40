// 实现一个通用Last<T>，它接受一个数组T并返回其最后一个元素的类型。

type arr11 = ['a', 'b', 'c']
type arr22 = [3, 2, 1]

type tail1 = Last<arr11> // expected to be 'c'
type tail2 = Last<arr22> // expected to be 1

type Last<T extends any[]> = T extends [...unknown[], infer Last] ? Last : never;