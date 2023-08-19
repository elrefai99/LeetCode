const threeSumClosest =(nums, target) => {
    let closestToTarget = nums[0] + nums[1] + nums[nums.length - 1];

    const sortedNums = nums.sort((a, b) => a - b);

    for (let i = 0; i < sortedNums.length - 2; i++) {
        let numLeft = i + 1;
        let numRight = sortedNums.length - 1;

        if (numLeft < numRight) {
            const subTotal =
                sortedNums[numLeft] + sortedNums[numRight] + sortedNums[i];

            if (subTotal == target) {
                return subTotal;
            }
            else if (subTotal < target) {
                numLeft++;
            }
            else {
                numRight--;
            }

            if (Math.abs(subTotal - target) < Math.abs(closestToTarget - target)) {
                closestToTarget = subTotal;
            }
        }
    }
    return closestToTarget;
};