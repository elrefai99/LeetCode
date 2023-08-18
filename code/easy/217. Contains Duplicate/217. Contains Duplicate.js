var containsDuplicate = function (nums) {
    const numbers = {}
    for (var i of nums) {
        if (numbers[i]) return true
        numbers[i] = true
    }
    return false
};