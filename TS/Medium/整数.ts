// 整数

// 请完成类型 Integer<T>，类型 T 继承于 number，如果 T 是一个整数则返回它，否则返回 never。


type Integer<T extends string | number> = number extends T ? never : `${T}` extends `${string}.${string}` ? never : T;