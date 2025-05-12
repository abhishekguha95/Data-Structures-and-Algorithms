/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const numToFreqMap = new Map();
	const freqToNumArr = [[]];
	for (const num of nums) {
		if (numToFreqMap.has(num)) {
			numToFreqMap.set(num, numToFreqMap.get(num) + 1);
		} else {
			numToFreqMap.set(num, 1);
			
		}
		freqToNumArr.push([]);
	}
	// console.log(numToFreqMap);
	// console.log(freqToNumArr);
	const uniqueNums = numToFreqMap.keys();
	for (const num of uniqueNums) {
		const freq = numToFreqMap.get(num);
		freqToNumArr[freq].push(num);
	}
	// console.log(freqToNumArr);
	let res = [];
	for (let j = freqToNumArr.length - 1; j > 0; j--) {
		// console.log("j", j);
		// console.log(freqToNumArr[j]);
		if (freqToNumArr[j].length > 0) {
			for (let l = 0; l < freqToNumArr[j].length; l++) {
				// console.log("l", l);
				res.push(freqToNumArr[j][l]);
				k--;
				if (k === 0) {
					return res;
				}
			}
		}
	}
};


console.log(topKFrequent([4, 1, -1, 2, -1, 2, 3], 2));