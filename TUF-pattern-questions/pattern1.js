//pattern 1
// * * *
// * * *
// * * *

function pattern1(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write('* ')
        }
        process.stdout.write('\n')
    }
}


pattern1(2)

pattern1(4)