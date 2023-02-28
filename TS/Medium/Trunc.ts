// Trunc
// 实现 的类型版本Math.trunc，它接受字符串或数字并通过删除任何小数位返回数字的整数部分。

type A = Trunc<12.34> // 12

type Trunc<T extends number | string> = `${T}` extends `${infer F}.${string}` ? F : `${T}`