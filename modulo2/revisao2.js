let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let impares = []


for (let i = 0; i <numeros.length; i ++) {
    if(numeros[i] % 2 == 1 ){
        impares.push(numeros[i])
    }
    }
    console.log(`Os numeros impares são ${impares}`)