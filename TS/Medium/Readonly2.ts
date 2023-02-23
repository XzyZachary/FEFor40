// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。

// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

interface Todo {
    title: string
    description: string
    completed: boolean
}

const todo1: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

// todo1.title = "Hello" // Error: cannot reassign a readonly property
// todo1.description = "barFoo" // Error: cannot reassign a readonly property
todo1.completed = true // OK

//   = keyof T必须要 Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>过不了case
type MyReadonly2<T, K extends keyof T = keyof T> = {
    [Key in keyof T as Key extends K ? never : Key]: T[Key];
} & {
        readonly [Key in keyof T as Key extends K ? Key : never]: T[Key]
    }