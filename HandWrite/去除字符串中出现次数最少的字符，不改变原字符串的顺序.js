// 去除字符串中出现次数最少的字符，不改变原字符串的顺序
let stringNum = 'aabcddd'
const newMap = new Map();
let num = 0;
for (let i = 0; i < stringNum.length; i++) {
    const find = newMap.get(stringNum[i]);
    if (find) {
        newMap.set(stringNum[i], find + 1)
    } else {
        newMap.set(stringNum[i], 1)
    }
}

let arr = Array.from(newMap)
console.log(33, newMap, arr)
arr.sort((a , b) => {
    return a[1] - b[1];
})
let minNum = arr[0][1];
let key
for(const item of newMap ){
    key = item[0]
    if(newMap.get(key) === minNum){
        const reg = new RegExp(key , 'g')
        stringNum = stringNum.replace(reg,'');
    }
}

console.log(333, stringNum)