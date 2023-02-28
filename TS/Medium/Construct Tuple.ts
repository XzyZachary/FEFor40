// Construct Tuple 

// 构造一个给定长度的元组。

type result = ConstructTuple<2> // 期望得到 [unknown, unkonwn]


type ConstructTuple<T extends number, R extends any[] = []> = R['length'] extends T ? R : ConstructTuple<T, [...R, unknown]>