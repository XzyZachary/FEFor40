
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]

type Flatten<T extends any[], Counter extends any[] = []> =  T extends [infer R, ...infer Rest] ? (R extends any[] ? Flatten<[...R, ...Rest], Counter> : Flatten<Rest, [...Counter, R]>) : Counter