let numero

console.log('Digite um numero')
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
})

function processamento(numero) {
    if(numero == 0){   
        console.log('Esse numero é zero.')
    } 
    else if(numero % 2 == 0) {
        console.log('Esse numero é par.')
    }
    else {
        console.log('Esse numero é impar.')
    }
}

