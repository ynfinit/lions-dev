let nome
let idade

console.log('Qual é o seu nome?')
process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data){
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
})
function processamento(nome, idade) {
    if (idade >= 18){
        console.log('Você é maior de idade!')
    }
    else {

        var x = 18-idade

        console.log(`Você não é maior de idade, falta ${x} anos`)
    }


}