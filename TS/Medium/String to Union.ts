// 实现一个将接收到的String参数转换为一个字母Union的类型。

type Test2 = '123';
type Result2 = StringToUnion<Test2>; // expected to be "1" | "2" | "3"

type StringToUnion<T extends string> = T extends `${infer R}${infer Rest}` ? StringToUnion<Rest> | R : never;