// 快慢指针
const res = [0,0,1,1,2,2,2,2,4,4,5,5,6]


const remove = (nums) => {
    let slow = 0
    let fast = 1
    
    while(fast < res.length) {
        if (res[slow] !== res[fast]) {
            slow++
            nums[slow] = nums[fast]
        }
    
        fast++;
    }
    
    return nums.splice(0, slow + 1)
}