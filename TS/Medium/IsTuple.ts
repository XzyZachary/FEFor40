// IsTuple
// Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

// For example:

type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false

type IsTuple<T> = [T] extends [never] ?  false : T extends readonly [...unknown[]] ? any[] extends T ? false : true : false;