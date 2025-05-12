var maxProfit = function (prices) {
	let left = 0;
	let right = 1;
	let diff = 0;
	while(right < prices.length){
		//if right less than left => switching both pointers
		if (prices[right] < prices[left]) {
			left = right;
			right = right + 1;
		} else {
			//if right more than left => take diff => switch only right pointer
            diff = Math.max(prices[right] - prices[left], diff);
            right = right + 1;
		}
		console.log("diff", diff);
	}
	return diff;
};

maxProfit([6, 1, 3, 2, 4, 7]);
