function main() {
	console.log("main");
	outer();
}


function outer() {
	return new Promise((res, rej) => {
		console.log("outer return val");
		res("outer return val");
	});
}

main();
