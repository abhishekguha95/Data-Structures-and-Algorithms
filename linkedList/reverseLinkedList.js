class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}
const nodesObj = {};

const vals = [1, 2, 3, 4, 5];
for (let i = 0; i < vals.length; i++) {
	let node = new Node(vals[i]);
	
}
console.log(nodesObj);
