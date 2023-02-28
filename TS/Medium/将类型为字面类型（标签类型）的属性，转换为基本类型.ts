// 将类型为字面类型（标签类型）的属性，转换为基本类型

// 将类型为字面类型（标签类型）的属性，转换为基本类型。

type PersonInfo = { name: 'Tom', age: 30, married: false, addr: { home: '123456', phone: '13111111111' } }

// 要求结果如下： type PersonInfo = { name: string, age: number, married: boolean, addr: { home: string, phone: string } }


type ToPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends bigint
  ? bigint
  : T extends symbol
  ? symbol
  : {
      [K in keyof T]: ToPrimitive<T[K]>
    }