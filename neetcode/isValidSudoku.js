/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const col_wise = []
	for(let i = 0; i < board.length; i++){
        const row = board[i]
        const rowSet = new Set()
        

    }
};

function hasRepeatElements(arr) {
	const setFromArray = new Set(arr);
	return Array.from(setFromArray).length !== arr.length;
}

var board = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(hasRepeatElements([1, 2, 3, 4]));

console.log(isValidSudoku(board));
