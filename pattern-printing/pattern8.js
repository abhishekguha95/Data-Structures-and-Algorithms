//pattern 8: replaced spaces with 'a' for clarity
// ********* 
// a*******a
// aa*****aa
// aaa***aaa
// aaaa*aaaa

function pattern8(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = 0; k < i - 1; k++) {
            process.stdout.write('a')
        }
        for (let j = 2 * (n - i) + 1; j > 0; j--) {
            process.stdout.write('*')
        }
        for (let k = 0; k < i - 1; k++) {
            process.stdout.write('a')
        }
        process.stdout.write('\n')
    }
}


pattern8(5)

pattern8(3)
