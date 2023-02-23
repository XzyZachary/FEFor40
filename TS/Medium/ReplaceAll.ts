// // ReplaceAll

// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。


type replaced1 = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'


// = From extends '' ? S :  S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S
// type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S :  S extends `${infer Start}${From}${infer End}` ? ReplaceAll<`${Start}${To}${End}`, From, To> : S
type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : (S extends `${infer L}${From}${infer R}` ? `${ReplaceAll<L, From, To>}${To}${ReplaceAll<R, From, To>}` : S)