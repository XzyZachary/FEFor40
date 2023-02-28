// Unique

// Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.

type Resq = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
type Res1q = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
type Res2q = Unique<[1, "a", 2, "b", 2, "a"]>; // expected to be [1, "a", 2, "b"]
type Res3 = Unique<[string, number, 1, "a", 1, string, 2, "b", 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]


// type Unique<T, U extends any[] = []> =  T extends [infer R, ...infer Rest] ? R extends U ? Unique<Rest, U> : Unique<Rest, [...U, R]> : U;


type isEqual3<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false

type Include<T extends any[], U> = T extends [infer F, ...infer O] ? isEqual3<F, U> extends true ? true : Include<O, U> : false;


type Unique<T extends any[], R extends any[] = []> = T extends [] ?  R :  T extends [infer F, ...infer O] ? Include<R, F> extends true ? Unique<O, R> :  Unique<O, [...R, F]> : R;