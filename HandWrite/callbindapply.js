Function.prototype.apply2 = function (context, args) {
    context = (context == null || context == undefined) ? window : context
    context.__fn = this
    let res = context.__fn(...args)
    delete  context.__fn
    return  res;
}


Function.prototype.call2 = function (context, ...args) {
    context = (context == null || context == undefined) ? window : context
    context.__fn = this
    let res = context.__fn(...args)
    delete context.__fn
    return res;
}


Function.prototype.bind2 = function(context, ...args1) {
    context = (context == null || context == undefined) ? window : context
    let _this = this
    return function(...args2) {
        context.__fn = _this
        let res = context.__fn(...[...args1, ...args2])

        delete context.__fn
        return res
    }
}