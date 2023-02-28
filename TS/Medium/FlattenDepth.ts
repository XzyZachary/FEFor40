// FlattenDepth

// Recursively flatten array up to depth times.

// For example:

type a5 = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b4 = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1


// ???需要复习
type FlattenArray<X extends any, D = 1, C extends any[] = [0]> =
  X extends any []
    ? D extends C['length']
      ? X
      : X extends [infer F, ...infer R]
        ? [...FlattenArray<F, D, [...C, 0]>, ...FlattenArray<R, D, C>]
        : X
    : [X];

type FlattenDepth<X extends any[], D = 1> = X extends [infer F, ...infer R]
  ? [...FlattenArray<F, D>, ...FlattenDepth<R, D>]
  : X;