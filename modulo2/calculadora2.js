let numero1 = 5
let numero2 = 6
let operacao

function calculadora(numero1, numero2, operacao ){


    switch (operacao) {

    case '+': 
        return numero1 + numero2

    case '-': 
        return numero1 - numero2

    case '*':
        return numero1 * numero2

    case '/':
        return numero1 / numero2
    }
}
console.log(calculadora(5, 8, '+'))
console.log(calculadora(5, 8, '-'))
console.log(calculadora(5, 8, '/'))
console.log(calculadora(5, 8, '*'))