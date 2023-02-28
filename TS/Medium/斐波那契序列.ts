// 斐波那契序列

// Implement a generic Fibonacci<T> takes an number T and returns it's corresponding Fibonacci number.

// The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21


type Fibonacci<T extends number, N extends unknown[] = [1], Cur extends unknown[] = [1], Pre extends unknown[] = [1]> = N['length'] extends T ? Cur['length'] : Fibonacci<T, [...N, 1], Pre, [...Pre, ...Cur]>