// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false


type IsUnion<T, C = T> = [T] extends [never] ? false : T extends C ? [C] extends [T] ? false : true : never;