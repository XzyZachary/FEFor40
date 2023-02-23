// Promise.all

// 键入函数PromiseAll，它接受PromiseLike对象数组，返回值应为Promise<T>，其中T是解析的结果数组。

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)


type MyAwaited2<T> = T extends PromiseLike<infer U> ? U : T


declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{ [Key in keyof T]: MyAwaited2<T[Key]>}>