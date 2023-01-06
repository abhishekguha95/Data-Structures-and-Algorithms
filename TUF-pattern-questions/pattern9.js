//pattern 9: replaced spaces with 'a' for clarity
// aa*aa
// a***a
// *****
// *****
// a***a
// aa*aa

function pattern9(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = n - i; k > 0; k--) {
            process.stdout.write('a')
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            process.stdout.write('*')
        }
        for (let k = n - i; k > 0; k--) {
            process.stdout.write('a')
        }
        process.stdout.write('\n')
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            process.stdout.write('a')
        }
        for (let j = 2 * (n - i) + 1; j > 0; j--) {
            process.stdout.write('*')
        }
        for (let j = 1; j < i; j++) {
            process.stdout.write('a')
        }
        process.stdout.write('\n')
    }

}

pattern9(5)

//pattern9(3)
