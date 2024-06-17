let precos = [1.99, 4.99, 7.99, 10.0, 15.0]
let precoMaximo = precos[0]
let precoMinimo = precos[0]

for(let i = 0; i < precos.length; i++) {
    if (precos[i] > precoMaximo){
        precoMaximo = precos[i]
    }
    if(precos[i] < precoMinimo){
        precoMinimo = preco[i]
    }
}
console.log(`O preco maximo é ${precoMaximo} e o preco minimo é ${precoMinimo}.`)