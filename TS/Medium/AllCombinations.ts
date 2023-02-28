// AllCombinations

// Implement type AllCombinations<S> that return all combinations of strings which use characters from S at most once.

// For example:

type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'


type String2Union<S extends string> = S extends `${infer C}${infer R}` ? C | String2Union<R> : never;


type AllCombinations<S extends string, U extends string = String2Union<S>> = [U] extends [never] ? '' : '' | { [K in U]:  `${K}${AllCombinations<never, Exclude<U, K>>}`}[U]; 