const longestOnes = function (nums, k) {
    let start = 0;
    let end = 0;
    let flipped = 0;
    let c = 0;
    while (end < nums.length) {
        if (nums[end] === 0) {
            flipped++;
        }

        while (flipped > k) {
            if (nums[start] === 0) {
                flipped--;
            }
            start++;
        }

        c = Math.max(c, end - start + 1);
        console.log(c);
        end++;
    }
    return c;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
