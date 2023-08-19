const fourSum = (nums, target) => {
    const quadruplets = [];
    if (nums == undefined || nums.length < 4) {
        return quadruplets;
    }
    nums.sort((a, b) => a - b);
    const n = nums.length;
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < n - 2; j++) {
            if (j != i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }
            let k = j + 1;
            let l = n - 1;
            while (k < l) {
                const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
                if (currentSum < target) {
                    k++;
                } else if (currentSum > target) {
                    l--;
                } else {
                    quadruplets.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;
                    while (k < l && nums[k] == nums[k - 1]) {
                        k++;
                    }
                    while (k < l && nums[l] == nums[l + 1]) {
                        l--;
                    }
                }
            }
        }
    }
    return quadruplets;
};
