// 可串联构造器

// 在 JavaScript 中我们经常会使用可串联（Chainable/Pipeline）的函数构造一个对象，但在 TypeScript 中，你能合理的给它赋上类型吗？

// 在这个挑战中，你可以使用任意你喜欢的方式实现这个类型 - Interface, Type 或 Class 都行。你需要提供两个函数 option(key, value) 和 get()。在 option 中你需要使用提供的 key 和 value 扩展当前的对象类型，通过 get 获取最终结果。



declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// 期望 result 的类型是：
interface Result4 {
  foo: number
  name: string
  bar: {
    value: string
  }
}

type Chainable<R = {}> = {
    option<K extends PropertyKey, V>(key: K, value: V): Chainable<Omit<R, K> & Record<K, V>>
    get(): R
}

type Chainable2<X extends Object = {}> = {
    option<T extends string, K>(key: T extends keyof X ? never : T, value: K): Chainable<Omit<X, T> & { [k in T]: K }>
    get(): X
}