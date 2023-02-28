// 实现类型版本的 Array.lastIndexOf, LastIndexOf<T, U> 接受数组 T, any 类型 U, 如果 U 存在于 T 中, 返回 U 在数组 T 中最后一个位置的索引, 不存在则返回 -1

// For example:

type Res1111 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2222 = LastIndexOf<[0, 0, 0], 2> // -1

type isEqual2<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

type LastIndexOf<T, U> = T extends [...infer O, infer L] ? isEqual2<L, U> extends true ? O['length'] : LastIndexOf<O, U> : -1