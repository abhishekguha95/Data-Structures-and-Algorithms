function rotate(arr, k) {
    let leftArr = arr.splice(0, k);
    arr = [...arr, ...leftArr];
    console.log('arr', arr);
}

//removing single element from start of array and pushing at end of array
function inplaceRotate(arr, k) {
    for (let i = 0; i < k; i++) {
        let ele = arr.splice(0, 1)[0];
        arr.push(ele);
    }
    console.log('arr', arr);
}

rotate([1, 2, 3, 4, 5], 2);
inplaceRotate([1, 2, 3, 4, 5], 2);
