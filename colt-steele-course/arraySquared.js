//Write a function, which accepts two arrays.
//The function should return true if every value in the array 
//has it's corresponding value squared in the second array.
//The frequency of values must be the same, order doesnt matter.

const arrayLength = 40400;
var arrOne = [];
var arrSquared = [];
for (let i = 0; i < arrayLength; i++) {
    arrOne.push(i);
    arrSquared.push(i * i);
}
// console.log('arrOne: ', arrOne)
// console.log('arrSquared: ', arrSquared)

function ArraySquaredNaive(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i of arr1) {
        let arr2_index = arr2.indexOf(i ** 2); // indexOf loops through entire array in worstcase
        if (arr2_index === -1) {
            // thus making this nested loop : O(N2)
            // NOTE: In JavaScript, index of elements not present in array is -1
            return false;
        }
        arr2.splice(arr2_index, 1); // removes the element at given index
    }
    return true;
}

// positive case
let t1 = performance.now();
let naive = ArraySquaredNaive(arrOne, arrSquared);
let t2 = performance.now();
console.log(naive, 'time by naive: ', `${t2 - t1}`);

// negative case
var arrOne = [];
var arrSquared = [];
for (let i = 0; i < arrayLength; i++) {
    arrOne.push(i);
    arrSquared.push(i * i);
}
//arrSquared[arrSquared.length - 1] = 1;
arrSquared[10] = 0;
t1 = performance.now();
naive = ArraySquaredNaive(arrOne, arrSquared);
t2 = performance.now();
console.log(naive, 'time by naive: ', `${t2 - t1}`);

//----------------------------------------------------------------------------------------------------------

var arrOne = [];
var arrSquared = [];
for (let i = 0; i < arrayLength; i++) {
    arrOne.push(i);
    arrSquared.push(i * i);
}
// console.log('arrOne: ', arrOne)
// console.log('arrSquared: ', arrSquared)

function ArraySquaredOptimal(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        // initial length check
        return false;
    }
    let arr1_obj = {}; // using objects
    let arr2_obj = {};

    for (let i of arr1) {
        // key is array element, value is frequency
        arr1_obj[i] = (arr1_obj[i] || 0) + 1;
    }
    for (let i of arr2) {
        arr2_obj[i] = (arr2_obj[i] || 0) + 1;
    }
    //console.log('arr1_obj: ', arr1_obj);
    //console.log('arr2_obj: ', arr2_obj);
    for (let key in arr1_obj) {
        if (!arr2_obj[key ** 2]) {
            return false;
        }
        if (arr2_obj[key ** 2] !== arr1_obj[key]) {
            return false;
        }
    }
    return true;
}

//positive case
t1 = performance.now();
let optimal = ArraySquaredOptimal(arrOne, arrSquared);
t2 = performance.now();
console.log(optimal, 'time by optimal: ', `${t2 - t1}`);

// negative case
var arrOne = [];
var arrSquared = [];
for (let i = 0; i < arrayLength; i++) {
    arrOne.push(i);
    arrSquared.push(i * i);
}
//arrSquared[arrSquared.length - 1] = 1;
arrSquared[10] = 0;
t1 = performance.now();
optimal = ArraySquaredOptimal([1, 2, 5, 5], [4, 2, 1, 2]);
t2 = performance.now();
console.log(optimal, 'time by optimal: ', `${t2 - t1}`);

//TODO: more edgecases
