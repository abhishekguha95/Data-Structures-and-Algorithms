const arr = [];
const arr_sqr = [];
const t1 = performance.now();
for (let i = 0; i < 200; i++) {
    arr.push(i);
    //arr_sqr.push(i**2)
}
const t2 = performance.now();
console.log('time: ', t2 - t1);
console.log(arr);
