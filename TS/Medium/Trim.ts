// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。


type trimed1 = Trim<'  Hello World  '> // expected to be 'Hello World'

type Blank1 = ' '|'\n'|'\t';

type Trim<T extends String> = T extends `${Blank1}${infer R}` | `${infer R}${Blank1}` ? Trim<R> : T;