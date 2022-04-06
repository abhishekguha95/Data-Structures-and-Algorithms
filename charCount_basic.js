// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  let res = {};
  for (let i of str) {      // used for of instead of usual for
    /*for each letter of the input str, if that letter in res as key
    increment value, else give value 1*/
    // if (res[i] > 0) {
    //     res[i]++ ;
    // } else {
    //     res[i] = 1;
    // }
    res[i] = (res[i] || 0) + 1; //replaced the if else by this shorter assignment
  }
  return res;
}

console.log(charCount('Helloh !'));
