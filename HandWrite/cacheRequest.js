// 请实现一个 cacheRequest 方法,保证发出多次同一个 ajax 请求时都能拿到数据,而实


const request =  (url, options) => {
    return new Promise(res => {
        setTimeout(() => {
            res({ data: options })
        }, 2000);
    })
}

const cache = new Map()

const cacheRequest = (url, options) => {
    let key = `${key}:${options.method}`;
    if (cache.has(key)) {
        if (cache.get(key).status === 'pending') {
            return cache.get(key).myWait;
        }

        return Promise.resolve(cache.get(key).data)
    } else {
        let requestApi = request(url, options);
        cache.set(key, { status: 'pending', myWait: requestApi});

        return requestApi.then(res => {
            cache.set(key, { status: 'sucess', data: res});
            return Promise.resolve(res);
        }).catch(err => {
            cache.set(key, { status: 'fail', data: err });
            Promise.reject(err);
        })
    }
}