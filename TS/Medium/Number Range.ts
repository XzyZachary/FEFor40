// Number Range 

// Sometimes we want to limit the range of numbers... For examples.

type resultrrr = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 


// ???需要重点复习

type NumberRange<L, H, Arr extends unknown[] = [], R = never> = Arr['length'] extends L ? Arr['length'] extends H ? R | Arr['length'] : NumberRange<[...Arr, 0]['length'], H, [...Arr, 0], R | Arr['length']> : NumberRange<L, H, [...Arr, 0], R>


type NumberRange2<L, H, Count extends 42[] = [], Flag extends boolean = Count['length'] extends L ? true : false, R = never> = Count['length'] extends H ? R | H : Flag extends false ? NumberRange2<L, H, [...Count, 42]> : NumberRange2<L, H, [...Count, 42], true, R | Count['length']>