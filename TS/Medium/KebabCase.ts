// Replace the camelCase or PascalCase string with kebab-case.

// // FooBarBaz -> foo-bar-baz

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

type KebabCase<T extends string> = T extends `${infer First}${infer Rest}` ? Rest extends Uncapitalize<Rest> ? `${Lowercase<First>}${KebabCase<Rest>}` : `${Lowercase<First>}-${KebabCase<Rest>}` : T;