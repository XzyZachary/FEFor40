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