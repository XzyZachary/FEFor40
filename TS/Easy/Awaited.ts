// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 例如：Promise<ExampleType>，请你返回 ExampleType 类型。

type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string


type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

// type MyAwaited<T extends Object> = T extends Promise<infer V> ? (V extends Promise<any> ? MyAwaited<V> : V) :  T extends object & { then: (onfulfilled: (arg: infer V) => any ) =>  any } ? V : never;

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U extends PromiseLike<any> ? MyAwaited<U> : U : never;