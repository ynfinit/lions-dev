let nome 
let idade
const ano=2024 

console.log('Como é seu nome?')

process.stdin.once('data', function(data){
    nome = data.toString().trim()
    console.log('Qual é sua idade')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    }) 
})
function processamento(nome, idade) {
    anodenascimento = ano - (idade)
    console.log(`Olá ${nome}, se você já fez aniversário esse ano, você nasceu no ano ${anodenascimento}, senão, você nasceu em ${anodenascimento-1}`)
}
