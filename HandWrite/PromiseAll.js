function promiseAll(promises) {
    return new Promise((res, rej) => {
        if (!Array.isArray(promises)) {
            throw new TypeError('argument must be a array')
        }

        var resolvedCounter = 0;
        var promiseNum = promises.length;

        var resolvedResult = [];

        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i]).then(value => {
                resolvedCounter++;
                resolvedResult[i] = value;
                if (resolvedCounter === promiseNum) {
                    return res(resolvedResult);
                }
            }, error => {
                return rej(error)
            })
        }
    })
}