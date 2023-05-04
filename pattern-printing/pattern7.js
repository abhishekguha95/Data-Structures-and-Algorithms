//pattern 7: replaced spaces with 'a' for clarity
// aaaaa*aaaaa
// aaaa***aaaa
// aaa*****aaa
// aa*******aa
// a*********a
// ***********

function pattern7(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n - i; j > 0; j--) {
            process.stdout.write('a')
        }
        for (let k = 2 * i - 1; k > 0; k--) {
            process.stdout.write('*')
        }
        for (let j = n - i; j > 0; j--) {
            process.stdout.write('a')
        }
        process.stdout.write('\n')
    }
}


pattern7(4)

pattern7(6)
