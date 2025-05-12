function binarySearchIterative(arr, num) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    console.log("mid", mid);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] > num) {
      console.log("if");
      high = mid - 1;
    } else {
      console.log("else");
      low = mid + 1;
    }
  }
  return -1;
}

function binarySearchRecursive(arr, low, high, num) {
  console.log(arr);
  // let low = 0;
  // let high = arr.length - 1;
  if (low > high) {
    return -1;
  }
  let mid = parseInt((low + high) / 2);
  console.log("mid", mid);
  if (arr[mid] === num) {
    return mid;
  } else if (arr[mid] > num) {
    console.log("if");
    return binarySearchRecursive(arr, 0, mid, num);
  } else {
    console.log("else");
    return binarySearchRecursive(arr, mid + 1, arr.length , num);
  }
}

console.log(binarySearchRecursive([3, 4, 8, 10, 15, 20], 0, 5, 20));
