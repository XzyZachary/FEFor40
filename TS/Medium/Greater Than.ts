// Greater Than 

// In This Challenge, You should implement a type GreaterThan<T, U> like T > U

// Negative numbers do not need to be considered.

// For example

GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
GreaterThan<111, 11> //should be true

type LengthOfString<T extends string, Arr extends string[] = []> = T extends `${infer F}${infer R}` ? LengthOfString<R, [...Arr, F]> : Arr['length']


type GreaterThanByStringArray<T extends any[], U extends any[]> = T extends [infer TF, ...infer TR] ? U extends [infer UF, ...infer UR] ? GreaterThanBySingleString<TF, UF> extends true ? true : GreaterThanByStringArray<TR, UR> : false : false;

type GreaterThanBySingleString<T extends any, U extends any, I extends number[] = []> = T extends NumberStringArray[I["length"]] ? false : U extends NumberStringArray[I["length"]] ? true : GreaterThanBySingleString<T, U, [...I, 1]>;


type NumberStringArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

type StringToArray<S extends string> = S extends `${infer A}${infer Rest}` ? [A, ...StringToArray<Rest>] : [];

type GreaterThanFn<T extends number, U extends number, C extends any[] = []> = T extends C["length"] ? false : U extends C["length"] ? true : GreaterThanFn<T, U, [...C, ""]> 

type GreaterThan<T extends number, U extends number> = LengthOfString<`${T}`> extends LengthOfString<`${U}`> ? GreaterThanByStringArray<StringToArray<`${T}`>, StringToArray<`${U}`>> : GreaterThan<LengthOfString<`${T}`>, LengthOfString<`${U}`>>