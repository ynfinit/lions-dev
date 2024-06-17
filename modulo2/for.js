let numeros = [1, -2, 3, -4, 5]
let positivos = []

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 0 ){
        positivos.push(numeros[i])
    }
}
console.log(`Os números positivos são ${positivos}.`)