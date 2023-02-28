// MapTypes

// MapTypes < T, R > 将对象 T 中的类型转换为由具有以下结构的类型 R 定义的不同类型的实现

// type StringToNumber = {
//     mapFrom: string; // value of key which value is string
//     mapTo: number; // will be transformed for number
// }

// 例子：
// type StringToNumber = { mapFrom: string; mapTo: number; }
// MapTypes<{ iWillBeANumberOneDay: string }, StringToNumber> // gives { iWillBeANumberOneDay: number; }
// // 请注意，用户可以提供类型的联合：

// type StringToNumber = { mapFrom: string; mapTo: number; }
// type StringToDate = { mapFrom: string; mapTo: Date; }
// MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
// // 如果我们的地图中不存在该类型，请保持原样：

// type StringToNumber = { mapFrom: string; mapTo: number; }
// MapTypes<{ iWillBeANumberOneDay: string, iWillStayTheSame: Function }, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }

// MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>, { name: boolean; date: string }> 过不了 
// type MapTypes<T, R extends { readonly mapFrom: unknown; readonly mapTo: unknown }> = {
//     [K in keyof T]:  T[K] extends R['mapFrom'] ? R['mapTo'] : T[K]
// }

type MapTypes<T, R extends { readonly mapFrom: unknown; readonly mapTo: unknown }> = {
    [K in keyof T]: T[K] extends R['mapFrom'] ? Extract<R, { mapFrom: T[K] }>['mapTo'] : T[K]
}

type MapTypes3<T, R extends { mapFrom: unknown, mapTo: unknown }> = {
    [P in keyof T]: T[P] extends R['mapFrom'] ? R extends unknown ? T[P] extends R['mapFrom'] ? R['mapTo'] : never : never : T[P]
}