// js实现每次调用一个函数自动加1

function add() {
    let i = 0;
    add = function() {
        return i++;
    }

    return i++;
}