function threeSum(nums) {
    if(nums.length < 3) return []
    const output = []

    nums.sort((a,b) => a - b)

    for(let i = 0; i < nums.length - 2;i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let numLeft = i+1
        let numRight = nums.length-1

        while (numLeft < numRight) {
            const sum = nums[i] + nums[numRight] + nums[left]
            if(sum===0) {
                output.push([nums[i], nums[numLeft], nums[numRight]])
                while (nums[numLeft] === nums[numLeft + 1]) numLeft++
                while (nums[numRight] === nums[numRight + 1]) numRight--
                numLeft++
                numRight--
            } else if (sum > 0) {
                numRight--
            } else {
                numLeft++
            }
        }
    }

    return output
};