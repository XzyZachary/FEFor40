相同点这四种方法的参数都是包含Promise实例的数组。
看下不同点：
作用：

* Promise.all() 全成功我成功 失败一个我失败
* Promise.race() 谁第一个改变状态就是谁的，无论成功或失败
* Promise.allSettled() 管你成功或失败，全部都得运行完
* Promise.any() 一个成功我成功，全部失败我失败

状态成功时返回值：

* Promise.all() 返回状态成功时的数组
* Promise.race() 第一个成功的
* Promise.allSettled() 无所谓成功或失败，返回值都是一个包含状态对象的数组
* Promise.any() 返回第一个成功的

状态失败时返回值：

* Promise.all() 第一个失败的
* Promise.race() 第一个失败的
* Promise.allSettled() 无所谓成功或失败，返回值都是一个包含状态对象的数组
* Promise.any() AggregateError: All promises were rejected

是否将参数数组内部的Promise实例全部执行完，才调用

* Promise.all() 成功是是，失败是否
* Promise.race() 不是
* Promise.allSettled() 是
* Promise.any() 成功是否，失败是是
