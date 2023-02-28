// 实现一个通用的 DeepMutable ，它使对象的每个属性，及其递归的子属性 - 可变。

import { type } from "express/lib/response"

type X = {
    readonly a: () => 1
    readonly b: string
    readonly c: {
        readonly d: boolean
        readonly e: {
            readonly g: {
                readonly h: {
                    readonly i: true
                    readonly j: "s"
                }
                readonly k: "hello"
            }
        }
    }
}

type Expected = {
    a: () => 1
    b: string
    c: {
        d: boolean
        e: {
            g: {
                h: {
                    i: true
                    j: "s"
                }
                k: "hello"
            }
        }
    }
}

type Todo = DeepMutable<X> // should be same as `Expected`


type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends (...args: unknown[]) => unknown ?  T[P] :  T[P] extends object ?  DeepMutable<T[P]> : T[P]
}