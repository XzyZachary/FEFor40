class EventEmitter {
    constructor() {
        this.cache = {}
    }

    on(name, fn) {
        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn];
        }
    }

    off(name, fn) {
        let tasks = this.cache[name]

        if (tasks) {
            const index = task.findIndex(f => f === fn);

            if (index >= 0) {
                tasks.splice(index, 1)
            }
        }
    }


    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            let tasks = this.cache[name].slice()

            for (let fn of tasks) {
                fn(...args)
            }

            if (once) {
                delete this.cache[name]
            }
        }
    }
}