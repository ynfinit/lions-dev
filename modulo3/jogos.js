
const readline = require('readline')


const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})


let jogos = []

let lol = {
    nome: 'League of Legends',
    criador: 'Riot',
    ano: '2008'
}
jogos.push(lol)

exibirMenu()

function exibirMenu(){
console.log(`Menu:
    1. Cadastrar jogo
    2. listar jogos
    3. Editar um jogo
    4. Remover um jogo
    5. Sair
    `)
    rl.question('Escolha uma opção:', (opcao) =>{
        switch (opcao){
            case '1':
                jogo()
                break
            case '2':
                listarjogos()
                exibirMenu()
                break
            case '3':
                editar()
                exibirMenu()
                break
            case '4':
                remover()
                exibirMenu()
                break
            case '5':
                rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
                break
            
    
        }
    })
}



function jogo(){
    rl.question('Digite o nome do jogo: ' , (nome) => {
        rl.question('Digite o criador do jogo: ', (criador) => {
            rl.question('Digite o ano de criação do jogo: ', (ano) => {
                jogos.push({nome: nome, criador: criador, ano: parseFloat(ano)})
                console.log('Jogo cadastrado com sucesso')
                exibirMenu()
            })
        })
    })
}


function listarjogos(){

    if(jogos.length == 0){
        console.log('Esta vazio')
    }
    else{
        console.log(jogos)
    }
}   


function editar(){
    if(jogos.length == 0){
        console.log('Não a nenhum jogo')
    }
    else{
        rl.question('Digite jogo você deseja editar:', (numero) => {
            if (numero > 0 && numero <= jogos.length){
                rl.question('Digite o novo nome do jogo:', (nome) => {
                    rl.question('Digite quem criou:', (criador) => {
                        rl.question('Digite o ano de criação:', (ano) => {
                            jogos[numero - 1] = {
                                nome,
                                criador,
                                ano
                                }
                            console.log('Editado com sucesso')
                            exibirMenu()
                        })
                    })
                })
            }else{
                console.log('Jogo invalido')
                exibirMenu()
            }
        })

    }
}



function remover(){
    rl.question('Digite o nome do jogo que deseja remover:', (numero) => {

        if(numero > 0 && numero <= jogos.length ){
            jogos.slice(numero -1, 1)
            console.log('Jogo removido com sucesso')
            exibirMenu()
        }
        else{
            console.log('Numero invalido tente novamente')
        }
    })
}