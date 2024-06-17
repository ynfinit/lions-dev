 let nota

 console.log('Qual é a sau nota ?')

    process.stdin.once('data', function(data) {
    nota = parseInt(data.toString().trim())
    processamento(nota)

     if (nota >= 70) {
        console.log(`Você foi aprovado com a nota: ${processamento(nota)}`)
    }
    else {
        console.log(`Você reprovou com a nota: ${processamento(nota)}`)
    }

     process.exit()
 })

 function processamento(nota){

    switch(true){

        case (nota >= 90 && nota <= 100):
            return 'A'

        case (nota >= 80 && nota <= 89):
            return 'B'
        
        case (nota >= 70 && nota <= 79):
            return 'C'

        case (nota >= 60 && nota <= 69):
            return 'D'

        case (nota >= 0 && nota <= 59):
            return 'F'
    }
    
}
