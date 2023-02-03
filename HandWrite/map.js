Array.prototype.map2 = function(callback, objThis) {
    if (typeof callback !== 'function') {
        throw new Error('callback type erro!')
    }

    const res = [];

    for(let i = 0; i < this.length; ++i) {
        res.push(callback.call(objThis, this[i], i, this))
    }

    return res;
}