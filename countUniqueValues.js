//write a function that accepts a sorted array and returns no. of unique values present in it

//Naive solution using frequency counter method
function countUniqueValuesNaive(inputArray) {
    let countObj = {};
    for (let i of inputArray) {
        //iterating over array once
        countObj[i] = (countObj[i] || 0) + 1; // updating frequency counter object
    }
    return Object.keys(countObj).length;
}

console.log(countUniqueValuesNaive([1, 1, 1, 2, 4, 4]));
console.log(countUniqueValuesNaive([]));
console.log(countUniqueValuesNaive([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));

//Solution using 2 pointer method: using while loop (my solution)
function countUniqueValuesPointer1(inputArray) {
    if (inputArray.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 1;
    //logic: compare left anf right element: if same increase right
    // if different increase left and assign right indexed element to incremented left index

    while (right < inputArray.length) {
        //till right reaches the end of the array
        if (inputArray[left] !== inputArray[right]) {
            // left and right element are different
            left = left + 1; // incrementing left
            inputArray[left] = inputArray[right]; // assigning right to left
        }
        right = right + 1; // incrementing right to continue the loop
    }
    //when loop ends from index 0 to left : elements will be the unique elements of the given array
    return left + 1; // total number  = index + 1
}
console.log(countUniqueValuesPointer1([1, 1, 1, 2, 4, 4]));
console.log(countUniqueValuesPointer1([]));
console.log(countUniqueValuesPointer1([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));


//using for loop (Colt's solution)
function countUniqueValuesPointer2(inputArray) {
    if (inputArray.length === 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < inputArray.length; j++) {
        if (inputArray[i] !== inputArray[j]) {
            i++;
            inputArray[i] = inputArray[j];
        }
    }
    return i + 1;
}

console.log(countUniqueValuesPointer2([1, 1, 1, 2, 4, 4]));
console.log(countUniqueValuesPointer2([]));
console.log(countUniqueValuesPointer2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
