// RequiredByKeys

// 实现一个通用的RequiredByKeys<T, K>，它接收两个类型参数T和K。

// K指定应设为必选的T的属性集。当没有提供K时，它就和普通的Required<T>一样使所有的属性成为必选的。

// 例如:

interface User {
  name1?: string
  age1?: number
  address1?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }


type Merge<T> = {
    [K in keyof T]: T[K]
}


type RequiredByKeys<T, K = keyof T> = Merge<{
    [P in keyof T as P extends K ? P : never]-?: T[P]
} & {
    [P in keyof T as P extends K ? never : P]: T[P]
}> 