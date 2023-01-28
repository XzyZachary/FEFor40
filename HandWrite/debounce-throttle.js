const debounce = (fn, delay = 1000) => {
    let timer = null;

    return function(...args) {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}


const throttle = (fn, delay = 500) => {
    let pre = 0;

    return  function(...args) {
        const now = new Date().getTime();
        if (now - pre >= delay) {
            fn.apply(this, args)
            pre = now;
        }
    }
}

const mydebounce = (fn, wait, imm) => {
    let timerId = null
    return function () {
        const context = this;
        const args = arguments;

        let result;

        if (timerId) clearTimeout(timerId);

        if (!imm) {
            timerId = setTimeout(() => {
                result = func.apply(context, args)
            }, wait);
        } else {
            let callNow = !timerId;

            timerId = setTimeout(() => {
                timerId = null;
            }, wait);
            if (callNow) result = func.apply(context, args)
        }

        return result;
    }
}

const mythrottle = (func, wait, option) => {
    const leading = option.leading || false;
    const trailing = option.trailing || false


    let timerId = null
    let lasttime = 0

    return function fn() {
        const context = this
        const args = arguments
        let result

        const now = new Date().valueOf();

        if (!leading && !lasttime) {
            lasttime = new Date().valueOf()
        }

        if (now - lasttime > wait) {
            result = func.apply(context, args)
            lasttime = now
            if (timer) {
                clearTimeout(timerId)
                timerId = null
            }
        } else if (trailing && !timerId ){
            clearTimeout(timerId)

            timerId = setTimeout(() => {
                result = func.apply(context, args)
                timerId = null
                lasttime = new Date().valueOf();
            }, wait);
        }
    }
}