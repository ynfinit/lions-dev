let numero1
let numero2
let operacao



function calculadora(numero1, numero2, operacao){

    if(operacao == '+'){
        return numero1 + numero2
    }
    else if(operacao == '-'){
        return numero1 - numero2
    }
    else if(operacao == '/'){
        return numero1 / numero2
    }
    else if(operacao == '*'){
        return numero1 * numero2
    }
}
console.log(calculadora(5, 8, '+'))
console.log(calculadora(5, 8, '-'))
console.log(calculadora(5, 8, '/'))
console.log(calculadora(5, 8, '*'))