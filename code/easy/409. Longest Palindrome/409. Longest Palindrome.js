var longestPalindrome = function(s) {
  let longest = 0;
  let keys = {};

    for (const char of s) {
        keys[char] = (keys[char] || 0) + 1;
        if (keys[char] % 2 == 0) longest += 2;
    }
    return s.length > longest ? longest + 1 : longest;
};