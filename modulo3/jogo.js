console.log('Boas vindas ao nosso jogo de adivinhação')
console.log('Atenção você tem 10 chances')

let numeroRodadas = 0
let limiteRodadas = 10

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    })
    

let numeroSorteado = Math.floor(Math.random() * 100) + 1
solicitarPalpite()

function solicitarPalpite(){
    numeroRodadas ++
    rl.question('Digite um número de 1 a 100:' , (palpite) => {
        if(numeroRodadas == limiteRodadas){
            console.log('Suas chances acabaram')
            console.log(`O numero sorteado era ${numeroSorteado}`)
            rl.close()
        }else{
            switch(true){
                case palpite < numeroSorteado:
                    console.log('Muito baixo')
                    solicitarPalpite()
                    break
                case palpite > numeroSorteado:
                    console.log('Muito alto')
                    solicitarPalpite()
                    break
                case palpite == numeroSorteado:
                    console.log('Voce acertou')
                    console.log(`Você precisou de ${numeroRodadas} rodadas para acertar o número!`)
                    rl.close()
                    break

                default:
                    console.log('Caracter invalido! Tente novamente')
                    solicitarPalpite()
                    break
                    }
        
        }
    })
}