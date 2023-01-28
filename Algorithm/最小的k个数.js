// 输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。

// 输入：arr = [3,2,1], k = 2
// 输出：[1,2] 或者 [2,1]

const quickSort = (arr, start, end) => {
  arr[0] = arr[start];

  while (start < end) {
    while (start < end && arr[end] >= arr[0]) {
      end--;
    }
    arr[start] = arr[end];
    console.log(arr, start, end);
    while (start < end && arr[start] <= arr[0]) {
      start++;
    }

    arr[end] = arr[start];

    console.log(arr, start, end);
  }

  arr[start] = arr[0];

  return start;
};

var getLeastNumbers = function (arr, k) {
  // 让数组真实数据从下标1开始，下标0放哨兵，我先初始化为 -1，任意值都行
  arr.unshift(-1);
  quickSort(arr, 1, arr.length - 1);
  return arr.slice(1, k + 1);
};
getLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4);
