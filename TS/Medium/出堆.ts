// 出堆
// 实现一个通用Pop<T>，它接受一个数组T，并返回一个由数组T的前length-1项以相同的顺序组成的数组

type arr111 = ['a', 'b', 'c', 'd']
type arr222 = [3, 2, 1]

type re1 = Pop<arr111> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr222> // expected to be [3, 2]

type Pop<T extends unknown[]> = T extends [...infer Rest, unknown] ? Rest : [];