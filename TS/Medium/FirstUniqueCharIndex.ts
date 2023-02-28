// FirstUniqueCharIndex

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by leetcode 387)

// FirstUniqueCharIndex<'leetcode'>

type FirstUniqueCharIndex<T extends string, _Acc extends string[] = []> = T extends '' ? -1 : T extends `${infer Head}${infer Rest}` ? Head extends _Acc[number] ? FirstUniqueCharIndex<Rest, [..._Acc, Head]> : Rest extends `${string}${Head}${string}` ? FirstUniqueCharIndex<Rest, [..._Acc, Head]> : _Acc['length'] : never;