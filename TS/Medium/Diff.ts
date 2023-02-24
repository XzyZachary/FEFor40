// 获取两个接口类型中的差值属性。

type Foo = {
    a: string;
    b: number;
}
type Bar = {
    a: string;
    c: boolean
}

type Result11 = Diff<Foo, Bar> // { b: number, c: boolean }
type Result22 = Diff<Bar, Foo> // { b: number, c: boolean }


type Diff<O, O1> = {
    [P in (Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>)]: P extends keyof O1 ? O1[P] : P extends keyof O ? O[P] : never
}