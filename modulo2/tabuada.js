let tabuada
let i

console.log('Digite um numero:')

process.stdin.once('data', function(data) {
    tabuada = parseInt(data.toString().trim())
    processamento()
    process.exit()
})
function processamento(){

    for (i = 1; i <= 100; i ++) {

console.log(`${tabuada} x ${i} = ${tabuada * i}`)
    }
}