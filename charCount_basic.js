// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
    let res = {};
    for (let i of str) {
        // used for of instead of usual for
        // logic:: for each letter of the input str, if that letter in res as key increment value, else give value 1*/
        // if (res[i] > 0) {
        //     res[i]++ ;
        // } else {
        //     res[i] = 1;
        // }
        if (isAlphaNumeric(i)) {
            let j = i.toLowerCase();
            res[j] = (res[j] || 0) + 1; //replaced the if else by this shorter assignment
        }
    }
    return res;
}

function isAlphaNumeric(str) {
    // checking using ascii values --> only boolean operations : much faster than regex
    // logic:: if ascii value is not present in our separate intervals : return false
    let code = str.charCodeAt(0);
    // if (!(code >= 48 && code <= 57) &&    //checking for numbers [0-9]
    // !(code >= 65 && code <= 90) &&        //checking for uppercase alphabets [A-Z]
    // !(code >= 97 && code <= 122)){        //checking for lowercase alphabets [a-z]
    //   return false;
    // }
    // return true;

    // replacing upper if else by single return
    return !(
        (
            !(code >= 48 && code <= 57) && //checking for numbers [0-9]
            !(code >= 65 && code <= 90) && //checking for uppercase alphabets [A-Z]
            !(code >= 97 && code <= 122)
        ) //checking for lowercase alphabets [a-z]
    );
}

console.log(charCount('Helloh !'));
