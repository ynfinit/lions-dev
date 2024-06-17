let nome 
let idade
let anoDeNascimento
const ano = 2024 
let fezAniversario

console.log('Como é seu nome?')

process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        console.log('Você ja fez aniversário esse ano?')

        process.stdin.once('data', function(data) {
            fezAniversario = data.toString().trim()

            processamento(nome, idade, anoDeNascimento, ano)

            process.exit()
        })
    })
})
function processamento(nome, idade, anoDeNascimento, ano) {

    anoDeNascimento = ano - idade

        if (fezAniversario =='sim'){
            resposta = true
        }
        else {
            resposta = false
        }
        if(resposta == true){
            console.log(`Você nasceu no ano ${anoDeNascimento}`)
        }
        else{
            console.log(`Você nasceu no ano ${anoDeNascimento -1}`)
        }
}