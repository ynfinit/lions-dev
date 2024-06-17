let nota1
let nota2
let media

console.log('Qual é a sua primeira nota?')

process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('Qual é a sua segunda nota?')

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        
        process.exit()
    })
})
function processamento(nota1, nota2){

media = (nota1 + nota2) /2 

    if(media >= 8){
        console.log(`Parabens, você passou de ano, sua nota foi: ${media}`)
    }
    else{
        console.log(`Que pena, você reprovou, sua nota foi: ${media}`)    
    }

}