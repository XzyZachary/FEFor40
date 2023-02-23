// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

type Replace<S extends string, From extends string, To extends string> = From extends '' ? S :  S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` : S