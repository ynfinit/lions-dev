let coresFavoritas = ['preto, azul, verde']
let coresEspeciais = []
let corDoUsuario

console.log('Qual é a sua cor favorita?')

process.stdin.once('data', function(data) {
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})
function processamento(corDoUsuario){

    if (coresFavoritas.includes(corDoUsuario)){
        console.log('A sua cor favorita é uma das favoritas da turma!')
    }
    else {  
        console.log('A sua cor favorita é diferente, vamos adicionar à lista!')
        coresEspeciais.push(corDoUsuario)
    }

    console.log(`As cores favoritas são ${coresFavoritas}, e as cores especias são ${coresEspeciais}. Quantidade de elementos:${coresFavoritas.length}.`)
}