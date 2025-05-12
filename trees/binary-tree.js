class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const root = new Node(1);

root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(7);

/**
 * PRE ORDER: ROOT => LEFT => RIGHT
 * @param {*} root
 * @returns
 */
function preOrderTraversal(root) {
	if (root == null) return;

	console.log(root.val);
	if (root.left) preOrderTraversal(root.left);
	if (root.right) preOrderTraversal(root.right);
}

// preOrderTraversal(root)

/**
 * POST ORDER: LEFT => RIGHT => ROOT
 * @param {*} root
 * @returns
 */
function postOrderTraversal(root) {
	if (root == null) return;

	if (root.left) postOrderTraversal(root.left);
	if (root.right) postOrderTraversal(root.right);
	console.log(root.val);
}

// postOrderTraversal(root);

/**
 * POST ORDER: LEFT => ROOT => RIGHT
 * @param {*} root
 * @returns
 */
function inOrderTraversal(root) {
	if (root == null) return;

	if (root.left) inOrderTraversal(root.left);
	console.log(root.val);
	if (root.right) inOrderTraversal(root.right);
}

inOrderTraversal(root)
