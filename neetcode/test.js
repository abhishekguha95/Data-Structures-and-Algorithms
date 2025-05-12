/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let max = quantity(left, right, height);
	while (left < right) {
		if (height[left] < height[right]) {
			left = left + 1;
		} else {
			right = right - 1;
		}
		let temp = quantity(left, right, height);
		max = Math.max(temp, max);
	}

	return max;

	function quantity(l, r, arr) {
		return Math.min(arr[l], arr[r]) * (r - l);
	}
};

const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(input));
