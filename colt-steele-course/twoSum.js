// Write a function that accepts a sorted array and return pairs that add up to a sum of k.
// Return an array containing all such pairs and if no such pair exist return undefined

//Naive approach for k = 0
function twoSumNaive(inputArray) {
    let resultArray = [];
    for (let i = 0; i < inputArray.length - 1; i++) {
        //iterating over each element of array
        for (let j = i + 1; j < inputArray.length; j++) {
            // nested loop: O(N2)
            if (inputArray[i] + inputArray[j] === 0) {
                resultArray.push(inputArray[i]);
                resultArray.push(inputArray[j]);
            }
        }
    }
    if (resultArray.length > 0) {
        return resultArray;
    }
}

console.log(twoSumNaive([-4, -2, 1, 0, -2, -4]));

// two pointer approach
function twoSumPointer(inputArray) {
    let resultArray = [];
    let left = 0; // initialize left with first index of inputArray
    let right = inputArray.length - 1; //initialize left with last index of inputArray
    while (left < right) {
        console.log(left, right);
        if (inputArray[left] + inputArray[right] === 0) {
            resultArray.push(inputArray[left]);
            resultArray.push(inputArray[right]);
            // if sum matches, change both elements: 
            left = left + 1;
            right = right - 1;
        }
        if (inputArray[left] + inputArray[right] > 0) {
            // if sum is greater than 0: reduce larger value
            right = right - 1;
        }
        if (inputArray[left] + inputArray[right] < 0) {
            // if sum is less than 0: increment smaller value
            left = left + 1;
        }
    }
    if (resultArray.length > 0) {
        return resultArray;
    }
}

console.log(twoSumPointer([-4, -2, 1, 0, 2, 4, 5]));
