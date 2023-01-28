// 不定长二维数组全排列

var arr = [
    ['1', '2', '3']
]
var results = []

var result = []

function doEx(arr, index) {
    for (let i = 0; i < arr[index].length; i++) {
        result[index] = arr[index][i]
        if (index !== arr.length - 1) {
            doEx(arr, index + 1)
        } else {
            results.push(result.join(','))
        }
    }
}
console.log(333, results)
doEx(arr, 0)


// 输入一个数组 arr = [1,2,3,4]
// 输出全排列

// [[1], [2], [3], [1, 2], [1, 3], ...., [1,2,3], [1,2,4] ....]
