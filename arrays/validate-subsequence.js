function validateSubSequence(array, sequence) {
    let i = 0;
    let j = 0;
    while (j < sequence.length) {
        // console.log('iter, i,j,array,sequence', i, j, array[i], sequence[j]);
        if (array[i] === sequence[j]) {
            // console.log('in if', i, j, array[i], sequence[j]);
            i++;
            j++;
        } else {
            i++;
        }
        if (i === array.length && j !== sequence.length) {
            // console.log(true);
            return false;
        }
    }
    // console.log(false);
    return true;
}

validateSubSequence([1, 2, 3, 4, 5, 6], [2, 6]);
