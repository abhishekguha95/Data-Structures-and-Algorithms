function lowerBound(arr, num) {
	let low = 0;
	let high = arr.length - 1;
	let result = arr.length;

	while (low <= high) {
		let mid = parseInt((low + high) / 2);
		if (arr[mid] >= num) {
			high = mid - 1;
			result = mid;
		} else {
			low = mid + 1;
		}
	}
	return result;
}

console.log(lowerBound([1, 1, 2, 3, 5, 8, 9, 10], 100));
