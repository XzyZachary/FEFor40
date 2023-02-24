// 实施RemoveIndexSignature<T>，从对象类型中排除索引签名。


type Fo1 = {
    [key: string]: any;
    foo(): void;
}

type A1 = RemoveIndexSignature<Fo1>  // expected { foo(): void }


type RemoveIndexSignature<T> = {
    [k in keyof T as string extends k ? never : number extends k ? never : symbol extends k ? never : k]: T[k]
}