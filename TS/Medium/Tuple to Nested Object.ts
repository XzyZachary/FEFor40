// Tuple to Nested Object

// Given a tuple type T that only contains string type, and a type U, build an object recursively.

type a11 = TupleToNestedObject<['a'], string> // {a: string}
type b11 = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c11 = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type


type TupleToNestedObject<T extends any[], U> = T extends [infer Head extends PropertyKey, ...infer Tail] ? { [P in Head]: TupleToNestedObject<Tail, U> } : U;