function twoSumTwo(numbers, target) {
	for (const i = 0; i < numbers.length - 1; i++) {
		if (numbers[i] + numbers[i + 1] === target) {
			return [i + 1, i + 2];
		}
	}
}
