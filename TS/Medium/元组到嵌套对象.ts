// 元组到嵌套对象
// 给定一个T只包含字符串类型的元组类型和一个类型U，递归地构建一个对象。
type a1 = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends readonly string[], U> = T extends [infer First extends string, ...infer Rest] ? {
    [P in First]: Rest extends string[] ? TupleToNestedObject<Rest, U> : U
} : U