function twoSum(arr, target) {
	let res;
	const diffMap = new Map();
	for (let j = 0; j < arr.length; j++) {
		res = [j];
		if (diffMap.has(arr[j])) {
			res.push(diffMap.get(arr[j]));
			break;
		} else {
			diffMap.set(target - arr[j], j);
		}
	}
	console.log(res);
}

// function twoSum(arr, target) {
// 	const diffArr = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		diffArr.push(target - arr[i]);
// 	}
//     const
// 	for (let j = 0; j < arr.length; j++) {

//     }
// }

twoSum([1,2,4,5,7,8], 5);

//4 => 0, -3 =-> 2, 1 => 3
