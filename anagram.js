// make a function that takes 2 strigns and checkes whether they are anagrams
// anagram: same characters, different order

function anagram(str1, str2) {
    if (str1.length !== str2.length) {   // initial check for length
        return false;
    }
    let str1_obj = {};    //using object to store frequency/count of each letter in both the strings
    let str2_obj = {};

    for (let i of str1) {            
        str1_obj[i] = (str1_obj[i] || 0) + 1;
    }
    for (let i of str2) {
        str2_obj[i] = (str2_obj[i] || 0) + 1;
    }

    for (let key in str1_obj) {         
        if (!(key in str2_obj)) { // 1st check:  presence of each letter
            return false;
        }
        if (str1_obj[key] !== str2_obj[key]) {       // 2nd check: frequency/count of each letter
            return false;
        }
    }
    return true;
}


console.log(anagram('',''));
console.log(anagram('abcd','bcad'));
console.log(anagram('abcde','bcadf'));

