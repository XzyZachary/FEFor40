// Join

// Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

type Rest = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Restt = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Restt2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Rest3 = Join<["o"], "u">; // expected to be 'o'


type Join<T, U extends string | number> = T extends [infer R extends string, ...infer O] ? `${R}${O extends [] ? '' : U}${Join<O, U>}` : ''
