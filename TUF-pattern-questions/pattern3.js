//pattern 3
// 1 
// 1 2
// 1 2 3
// 1 2 3 4

function pattern3(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write(`${j+1} `)
        }
        process.stdout.write('\n')
    }
}


pattern3(4)

pattern3(6)
