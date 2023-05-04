//pattern 6
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`${j + 1} `)
        }
        process.stdout.write('\n')
    }
}


pattern6(4)

pattern6(6)
