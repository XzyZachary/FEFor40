// 计算字符串的长度，类似于 String#length

type LengthOfString<S extends string, Counter extends string[] = []> = S extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [First, ...Counter]> : Counter['length']