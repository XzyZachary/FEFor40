// Implement the type Filter<T, Predicate> takes an Array T, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.

type Filter3<T extends any[], P> = T extends [infer A, ...infer rest] ? [...(A extends P ? [A] : []), ...Filter<rest, P>] : [];