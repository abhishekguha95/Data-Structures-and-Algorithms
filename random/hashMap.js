function processData(input) {
	//Enter your code here
	input = input.split("\n");
	const n = parseInt(input[0]);
	// console.log("n", n)
	const myMap = new Map();
	for (let i = 1; i < n + 1; i++) {
		let [key, val] = input[i].split(" ");

		val = parseInt(val);
		myMap.set(key, val);
	}
	// console.log("input.length", input.length)
	for (let j = n+1; j < input.length; j++) {
		if (myMap.has(input[j])) {
			console.log(`${input[j]}=${myMap.get(input[j])}`);
		} else {
			console.log("Not found");
		}
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
});

process.stdin.on("end", function () {
	processData(_input);
});
