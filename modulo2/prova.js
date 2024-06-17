let prova1
let prova2
let media
let nota = []

console.log('Digite a nota da prova1 ')
 
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Digite a nota da prova2 ')

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento()
        process.exit()
        })
})

function processamento() {

    nota.push(prova1)
    nota.push(prova2)

    media =(nota[0] + nota[1])/2
    console.log(`Sua média é ${media}`)

}
