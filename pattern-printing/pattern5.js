//pattern 5
// * * * * 
// * * *
// * *
// *

function pattern5(n) {
    for (let i = n; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            process.stdout.write(`* `)
        }
        process.stdout.write('\n')
    }
}


pattern5(4)

pattern5(6)
