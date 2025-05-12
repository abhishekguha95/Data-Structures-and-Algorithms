/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
	const preProduct = [1];
	const postProduct = [];
	for (let i = 0; i < nums.length; i++) {
		const prod = preProduct[preProduct.length - 1] * nums[i];
		preProduct.push(prod)
	}
	console.log(preProduct)
};

productExceptSelf([1,2,3,4])
