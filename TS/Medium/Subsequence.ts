// Given an array of unique elements, return all possible subsequences.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

// For example:

type A3 = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]


type Subsequence<T> = T extends [infer F, ...infer R] ? ([F] | [F, ...Subsequence<R>] | Subsequence<R>) : T