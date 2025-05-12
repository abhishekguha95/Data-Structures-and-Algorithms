function longestConsecutive(nums) {
	const newSet = new Set();
	for (const ele of nums) {
		newSet.add(ele);
	}
	let longestSeqLen = 0;
	for (const ele of newSet.values()) {
		let seqLen = 1;

		/**
		 * checking if left neighbour exists
		 * if left neighbour exists => this element is NOT sequence starter => so continue to next element
		 * if left neighbour does NOT exists => this element is a sequence starter
		 */
		if (newSet.has(ele - 1)) continue;

		/**
		 * staring with this element's next consecutive number,
		 * keep checking if they are present in the set,
		 * if present, our consecutive sequence grows,
		 * so keep incrementing sequence length, next sequence element
		 */
		let seqEle = ele + 1;
		while (newSet.has(seqEle)) {
			seqEle++;
			seqLen++;
		}
		if (seqLen > longestSeqLen) longestSeqLen = seqLen;
	}
	console.log(longestSeqLen);
	return longestSeqLen;
}

const nums = [0, 3, 2, 5, 4, 6, 1, 4];
const numsSorted = [0, 1, 2, 3, 4, 4, 5, 6];

longestConsecutive(nums);

function longestConsecutiveOnSorted(nums) {
	let longestSeqLen = 0;
	let seqLen = 1;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i + 1] === nums[i] + 1) {
			// console.log(nums[i], nums[i+1])
			seqLen++;
			if (seqLen > longestSeqLen) longestSeqLen = seqLen;
			// console.log(seqLen)
		} else if (nums[i + 1] === nums[i]) continue;
		else {
			if (seqLen > longestSeqLen) longestSeqLen = seqLen;
			seqLen = 1;
			continue;
		}
	}
	console.log(longestSeqLen);
	return longestSeqLen;
}

longestConsecutiveOnSorted(numsSorted);
