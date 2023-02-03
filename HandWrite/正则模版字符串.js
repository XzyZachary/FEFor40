String.prototype.render = function(data) {
    return this.replace(/{{[.\s\S]*?}}/g, match => {
        if (match = match.substring(2, match.length - 2).trim() == '') {
            return '';
        } else if (match.startsWith('#')) {
            return eval(match.substr(1, match.length - 1))
        } else {
            return data[match] ? data[match] : ''
        }
    })
}