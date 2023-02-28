// Fill

// Fill，一个常见的 JavaScript 函数，现在让我们用类型来实现它。 Fill<T, N, Start?, End?>可以看到，Fill接受四种类型的参数，其中T和N是必选参数，和Start是End可选参数。这些参数的要求是：T必须是a tuple，N可以是任意类型的值，Start必须End是大于等于0的整数。

// ??? 需要复习
type exp33 = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  L extends 1[]  = [],
  IsReplace extends boolean = false
> =  Start extends End ? T :  T extends [infer Head, ...infer Rest] ? L['length'] extends Start ? [N, ...Fill<Rest, N, Start, End, [1, ...L], true>] : L['length'] extends End ? [Head, ...Fill<Rest, N, Start, End, [1, ...L], false>] : [(IsReplace extends true ? N : Head), ...Fill<Rest, N, Start, End, [1, ...L], IsReplace>] : []
