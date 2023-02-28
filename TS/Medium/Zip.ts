// In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple

type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

type Zip<T extends any[], U extends any[], A extends any[] = []> = T extends [] ? [] : U[A['length']] extends undefined ? [] : T extends [infer l, ...infer r] ? [[l, U[A['length']]], ...Zip<r, U, [...A, 1]>] : []