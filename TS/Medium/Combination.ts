// Combination

// Given an array of strings, do Permutation & Combination. It's also useful for the prop types like video controlsList

// expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
type Keys = Combination<['foo', 'bar', 'baz']>

// 不理解[number]干啥的复习！

type Filter<T, U> = T extends [] ? [] : T extends [infer Head, ...infer Tail] ? Head extends U ? Filter<Tail, U> : [Head, ...Filter<Tail, U>] : never;

type Combination<T extends string[]> = T extends [] ? never : {
    [K in keyof T]: T[K] | `${T[K]} ${Combination<Filter<T, T[K]>>}`
}[number]