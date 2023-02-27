// 给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

type MinusMap = {
    '0': -1
    '1': 0
    '2': 1
    '3': 2
    '4': 3
    '5': 4
    '6': 5
    '7': 6
    '8': 7
    '9': 8
}


type _GetHeadAndLast<T extends string, Acc extends string = ''> = T extends `${infer Head}${infer Tail}` ? Tail extends '' ? [head: Acc, last: Head] : _GetHeadAndLast<Tail, `${Acc}${Head}`> : never;


type GetHead<T extends string>  = _GetHeadAndLast<T>[0]
type GetLast<T extends string> = _GetHeadAndLast<T>[1]

type ToNumber<T extends string> = T extends `${infer U extends number}` ? U : never

type MinusOne<T extends number> = `${T}` extends infer _T extends string ? _T extends keyof MinusMap ? MinusMap[_T] : ToNumber<GetLast<_T> extends '0' ? `${GetHead<_T> extends '1' ? '' : MinusOne<GetHead<_T>>}9` : `${GetHead<_T>}${MinusMap[GetLast<_T>]}`> : never;


