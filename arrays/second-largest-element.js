const t = parseInt(readLine());
let arr, n;
for (let i = 0; i < t; i++) {
    n = parseInt(readLine());
    arr2 = readLine().replace(/\s+$/g, '').split(' ');
    arr = arr2.map((ele) => parseInt(ele));
    let max = arr[0];
    let secMax = -Infinity;
    // console.log('case')
    // console.log('arr',arr)
    for (let j = 1; j < n; j++) {
        // console.log('j', j)
        if (arr[j] > max) {
            // console.log('in if 1')
            secMax = max;
            max = arr[j];
        } else if (max > arr[j] && secMax < arr[j]) {
            // console.log('in if 2')
            secMax = arr[j];
        }
        // console.log('max', max)
    }
    secMax = secMax == -Infinity ? -1 : secMax;
    console.log(secMax);
}
