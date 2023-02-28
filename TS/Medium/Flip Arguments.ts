// Flip Arguments

// Implement the type version of lodash's _.flip.

// Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

// For example:

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

type Reverse3<T extends unknown[]> = T extends [infer Head, ...infer Tail] ? [...Reverse3<Tail>, Head] : [];
type FlipArguments<T extends (...args: any) => any> = (...args: Reverse3<Parameters<T>>) => ReturnType<T>; 