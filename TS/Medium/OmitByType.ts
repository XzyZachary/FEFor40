// OmitByType
// From T, pick a set of properties whose type are not assignable to U.

// For Example

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }

type OmitByType<T extends object, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K]
} 