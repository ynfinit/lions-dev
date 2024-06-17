let numeros = [27, 10, 3, 0, 5, 6, 3]
let idade = [16]
let impares = []
let pares = []

numeros.push(idade)

for (let i = 0; i <numeros.length; i ++) {
    if(numeros[i] % 2 == 1 ){
        impares.push(numeros[i])   
}
else {
        pares.push(numeros[i]) 
        }
}
    console.log(`Os numeros pares são ${pares}`)
    
    console.log(`Os numeros impares são ${impares}`)