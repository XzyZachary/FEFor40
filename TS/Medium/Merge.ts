// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

type foo = {
    name: string;
    age: string;
}

type coo = {
    age: number;
    sex: string
}

type Result3 = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

type Merge<T, K> = {
    [Key in keyof T | keyof K]: Key extends keyof K ? K[Key] : Key extends keyof T ? T[Key] : never
}