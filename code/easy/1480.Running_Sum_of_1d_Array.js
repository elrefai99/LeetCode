var runningSum = (nums) => {
    var countSum = 0
    for(var i = 0; i < nums.length; i++) {
        countSum += nums[i]
        nums[i] = countSum
    }
    return nums
}

// Or
var runningSum = (nums) => {
    let currentSum = 0
    return nums.map((num) => currentSum += num)
};