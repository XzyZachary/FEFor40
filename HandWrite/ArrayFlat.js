const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]]


let dd = []
function float(arr) {
    arr.forEach(element => {
        if (Array.isArray(element)) {
            float(element)
        } else {
            dd.push(element)
        }
    });
}
float(arr)
console.log(333, dd)



Array.prototype.float = function (deep = 1) {

    let res = []

    if(depp === 'inf') {
        this.forEach(item => {
            if (Array.isArray(item)) {
                res = res.concat(item.flat())
            } else {
                res.push(item)
            }
        })
    } else {
        deep--;

        this.forEach(item => {
            if (Array.isArray(item) && deep > 0) {
                res = res.concat(item.flat(deep))
            } else {
                res.push(item)
            }
        })
    }

    return res;
}