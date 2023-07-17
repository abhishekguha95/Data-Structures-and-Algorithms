//codestudio implementation for taking input
// const t = parseInt(readLine());
// let arr, n;
// for (let i = 0; i < t; i++) {
//     n = parseInt(readLine());
//     arr2 = readLine().replace(/\s+$/g, '').split(' ');
//     arr = arr2.map((ele) => parseInt(ele));
//     let max = arr[0];
//     let secMax = -Infinity;
//     // console.log('case')
//     // console.log('arr',arr)
//     for (let j = 1; j < n; j++) {
//         // console.log('j', j)
//         if (arr[j] > max) {
//             // console.log('in if 1')
//             secMax = max;
//             max = arr[j];
//         } else if (max > arr[j] && secMax < arr[j]) {
//             // console.log('in if 2')
//             secMax = arr[j];
//         }
//         // console.log('max', max)
//     }
//     secMax = secMax == -Infinity ? -1 : secMax;
//     console.log(secMax);
// }

function secondLargestElementBrute(arr) {
    let n = arr.length;
    //sorting the array in place
    //JS sort function does string comparison by default
    //so it needs a compare function for numbers
    arr.sort((a, b) => a - b);
    console.log('sorted: ', arr);
    let max = arr[arr.length - 1];
    console.log('max: ', max);
    let secMax = -1;
    //one pass from right to left, compare with max
    //stop with you get an element != max
    for (let i = n - 1; i > -1; i--) {
        console.log('i, arr[i]: ', i, arr[i]);
        if (arr[i] != max) {
            secMax = arr[i];
            break;
        }
    }
    console.log(secMax);
}

function secondLargestElementBetter(arr) {
    let n = arr.length;
    let max = arr[0];
    //first pass to find max
    for (let i = 0; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    let secMax = -Infinity;
    //second pass to compare each element with max and find second max
    for (let j = 0; j < n; j++) {
        if (arr[j] > secMax && arr[j] !== max) {
            secMax = arr[j];
        }
    }
    secMax = secMax === -Infinity ? -1 : secMax;
    console.log(secMax);
}

function secondLargestElementOptimal(arr) {
    let n = arr.length;
    let max = arr[0];
    let secMax = -Infinity;
    // console.log('case')
    // console.log('arr',arr)
    //single pass to track max and second max together
    for (let j = 1; j < n; j++) {
        // console.log('j', j)
        if (arr[j] > max) {
            // console.log('in if 1')
            secMax = max;
            max = arr[j];
        } else if (arr[j] < max && arr[j] > secMax) {
            // console.log('in if 2')
            secMax = arr[j];
        }
        // console.log('max', max)
    }
    secMax = secMax == -Infinity ? -1 : secMax;
    console.log(secMax);
}

// secondLargestElementBrute([2, 4, 88, 9, 9, 7]);
// secondLargestElementBrute([2, 3, 1, 3, 3, 4, 1]);
secondLargestElementBetter([-2, -2, 0, -3, -3]);
