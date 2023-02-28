// IndexOf

// Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

type Res11 = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res331 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res332 = IndexOf<[0, 0, 0], 2>; // expected to be -1
// your answers
type ArrToUnion<T extends any[]> = T[number]


type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false


type IndexOf3<T extends any[], U, C extends any[] = []> = U extends ArrToUnion<T> ?
    T extends [infer F, ...infer R] ? isEqual<U, F> extends true ? C['length'] : C extends [...infer R1] ? IndexOf<R, U, [...R1, 1]> : C : C
    : -1



type IndexOf<T extends unknown[], U, S extends unknown[] = []> = T extends [infer L, ...infer Rest] ? isEqual<L, U> extends true ? S['length'] : IndexOf<Rest, U, [...S, L]> : -1;