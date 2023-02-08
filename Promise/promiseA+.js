// 记录Promise的三种状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

/**
 * 运行一个微队列任务
 * 把传递的函数放到微队列里
 * @param {*} callback 
 */
function runMicroTask(callback) {
    // 判断node环境
    // 为了避免 变量未定义 错误，这里最好加上gloablthis

    if (globalThis.process && globalThis.process.nextTick) {
        process.nextTick(callback)
    } else if (globalThis.MutationObserver) {
        const p = document.createElement('p')
        const observer = new MutationObserver(callback)
        observer.observe(p, {
            childList: true
        })
        p.innerHTML = '1'
    } else {
        setTimeout(callback, 0);
    }
}


/**
 * 判断一个数据是否是Promis对象
 * @param {*} obj 
 * @returns 
 */
function isPromise(obj) {
    return !!(obj && typeof obj === 'object' && typeof obj.then == 'function')
}


class MyPromise {
    constructor(exectuor) {

        this._state = PENDING;
        this._value = undefined;
        this._handlers = [];

        try {
            exectuor(this._resolve.bind(this), this._reject.bind(this))
        } catch (error) {
            this._reject(error)
            console.error(error);
        }
    }


    _pushHandlers(exectuor, state, resolve, reject) {
        this._handlers.push({
            exectuor,
            state,
            resolve,
            reject
        })
    }

    /**
     * 根据实际情况 执行队列
     * @returns 
     */
    _runHandlers() {
        if (this._state == PENDING) {
            return;
        }

        while(this._handlers[0]) {
            const handler = this._handlers[0]
            this._runOneHandler(handler)
            this._handlers.shift()
        }
    }

    /**
     * 处理一个handler
     * @param {Object} handler 
     */
    _runOneHandler({ exectuor, state, resolve, reject }) {
        runMicroTask(() => {
            if (this._state !== state) {
                return;
            }

            if (typeof exectuor !== 'function') {
                this._state === FULFILLED ? resolve(this._value) : reject(this._value)
                return
            }

            try {
                const result = exectuor(this._value)

                if (isPromise(result)) {
                    result.then(resolve, reject)
                } else {
                    resolve(result)
                }
            } catch (error) {
                reject(error)
                console.error(error)
            }
        })
    }


    /**
     * Promise A+规范 then
     * @param {Function} onFulfilled 
     * @param {Function} onRejected 
     */
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this._pushHandlers(onFulfilled, FULFILLED, resolve, reject)
            this._pushHandlers(onRejected, REJECTED, resolve, reject)
            this._runHandlers()
        })
    }


    /**
     * 仅处理失败的场景
     * @param {Function} onRejected 
     * @returns 
     */
    catch(onRejected) {
        return this.then(null, onRejected)
    }

    /**
     * 无论成功还是失败都会执行回调
     * @param {Function} onSettled 
     * @returns 
     */
    finally(onSettled) {
        return this.then(data => {
            onSettled();
            return data;
        })
    }

    /**
     * 更新任务状态
     * @param {String} newState 
     * @param {any} value 
     * @returns 
     */
    _changeState(newState, value) {
        if (!this._state !== PENDING) {
            return
        }

        this._state = newState
        this._value = value;

        this._runHandlers();
    }

    /**
     * 标记当前任务完成
     * @param {any} data 
     */
    _resolve(data) {
        this._changeState(FULFILLED, data)
    }

    /**
     * 标记当前任务失败
     * @param {any} reason 
     */
    _reject(reason) {
        this._changeState(REJECTED, reason)
    }



}