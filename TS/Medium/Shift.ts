// Implement the type version of Array.shift

// For example

type Result = Shift<[3, 2, 1]> // [2, 1]


type Shift<T extends any[]> = T extends [] ? [] : T extends [any, ...infer Tail] ? Tail : never;