// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

// const quickSort = (arr, start, end) => {
//   arr[0] = arr[start];

//   while (start < end) {
//     while (start < end && arr[end] >= arr[0]) {
//       end--;
//     }
//     arr[start] = arr[end];
//     while (start < end && arr[start] <= arr[0]) {
//       start++;
//     }
//     arr[end] = arr[start];
//   }

//   arr[start] = arr[0];

//   return start;
// };

// var getLeastNumbers = function (arr, k) {
//   // 让数组真实数据从下标1开始，下标0放哨兵，我先初始化为 -1，任意值都行
//   arr.unshift(-1);
//   quickSort(arr, 1, arr.length - 1);
//   console.log(33, arr)
//   return arr.slice(1, k + 1);
// };
// console.log(33, getLeastNumbers([4, 5,1,6,2,7,3,8], 2))

// var swap = function(arr, i, j){
//     let tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }

// var quickSor2 = (arr, l, r) => {
//     if (l >= r) return;
//     let i = l, j = r;

//     while(i < j) {
//         while(i < j && arr[j] >= arr[l]) j--;
//         while(i < j && arr[i] <= arr[l]) i++;
//         swap(arr, i, j)

//         console.log(arr, i, j)
//     }
//     swap(arr, l, i);

//     console.log(191919, arr, i, j)
//     quickSor2(arr, l, i - 1)

//     quickSor2(arr, i + 1, r)
// }

// var getLeastNumbers = function(arr, k){
//     quickSor2(arr, 0, arr.length - 1);
//     return arr.slice(0, k);
// }

// getLeastNumbers([4, 5,1,6,2,7,3,8], 2)
// 4、5、1、6、2、7、3、8

// 4 3 1 6 2 7 5 8
// 4 3 1 2 6 7 5 8

// function partition(arr, start, end) {
//     const k = arr[start]

//     let left = start + 1, right = end;
//     while(1) {
//         while(left <= end && arr[left] <= k) ++left;
//         while(right >= start + 1 && arr[right] >= k) --right;

//         if (left >= right) {
//             break;
//         }

//         [arr[left], arr[right]] = [arr[right], arr[left]]

//         ++left
//         ++right
//     }

//     [arr[right], arr[start]] = [arr[start], arr[right]]

//     return right
// }


// var getLeastNumbers = (arr, k) => {
//     const length = arr.length;

//     if (k >= length) return arr;

//     let left = 0,right = length - 1;
//     let index = partition(arr, left, right)

//     while(index !== k) {
//         if (index < k) {
//             left = index + 1;
//             index = partition(arr, left, right)
//         } else if (index > k) {
//             right = index - 1
//             index = partition(arr, left ,right)
//         }
//     }

//     return arr.slice(0, k)
// }


var getLeastNumbers = (arr, k) => {
    if (k >= arr.length) return arr;

    function qSort(arr, low, height) {
        if (low >= height) return;

        let flag = arr[low]

        let left = low, right = height

        while(left < right) {
            while(arr[right] >= flag && left < right) right--;

            while(arr[left] <= flag && left < right) left++

            if (left < right) {
                [arr[left], arr[right]] = [arr[right], arr[left]]
            }
        }

        arr[low] = arr[right]
        arr[right] = flag

        if (right == k) return

        if (k < right) qSort(arr, low, right - 1)
        else qSort(arr, right + 1, height)
    }

    qSort(arr, 0 , arr.length - 1)

    return arr.slice(0, k)
}