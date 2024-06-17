// Recuperação Luiz e Alex 
let verificacao = false
let numero = 5
let resposta 

    if(numero % 2 == 0){
        verificacao = true
        resposta = 'par' 
    }
    else{
        verificacao = false
        resposta = 'impar'
    }
    

    console.log(`${numero} é um numero ${resposta}.`)