function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left), prototype = right.prototype;

    while(true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }
}