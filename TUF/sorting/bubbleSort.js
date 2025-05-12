let arr = [4, 2, 6, 7, 8, 9, 1, 3, 5];

//iterations done using for, how many times iteration to be run is found using while
//using a flag, running iteration till array is sorted
let swapped;
do {
	swapped = false;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			let temp = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = temp;
			swapped = true;
		}
	}
} while (swapped);
console.log(arr)

arr = [4, 2, 6, 7, 8, 9, 1, 3, 5];

//because of adjacent swaps => after every iteration of entire loop, the max element gets pushed to the end of the array
//so we know beforehand how many times looping is needed => so using 2 for loops
//outer loop => n times, inner loop => 
for (let i = arr.length; i > 0; i--) {
	for (let j = 0; j < i; j++) {
		if (arr[j] > arr[j + 1]) {
			let temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
		}
	}
}
console.log(arr)