const arr = [4, 2, 6, 7, 8, 9, 1, 3, 5];

for (let i = 0; i < arr.length - 1; i++) {
	let min = arr[i];
	let min_ind = i;
	for (let j = i; j < arr.length; j++) {
		if (arr[j] < min) {
			min = arr[j];
			min_ind = j;
		}
	}
	let temp = arr[i];
	arr[i] = min;
	arr[min_ind] = temp;
}


console.log(arr)