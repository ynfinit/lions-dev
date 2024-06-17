let somaPares = 0 
let somaImpares = 0
let totalPares = 0
let totalImpares = 0
let mediaPares = 0
let mediaImpares = 0

for (let i = 1; i <= 999; i ++) {
    
        if (i %2 == 0){
        totalPares++
        somaPares += i    
    }
        else{
        totalImpares++
        somaImpares += i
    }


}
mediaPares = somaPares/totalPares
mediaImpares = somaImpares/totalImpares

console.log(`O número total de pares é ${totalPares}`)
console.log(`O número total de impares é ${totalImpares}`)
console.log(`A soma de pares é ${somaPares}`)
console.log(`A soma de impares é ${somaImpares}`)
console.log(`A media de pares é ${mediaPares}`)
console.log(`A media de impares é ${mediaImpares}`)

    if (somaPares>somaImpares){
    console.log('Tem mais números pares do que impares')
}
    else{
    console.log('Tem mais números impares do que pares')
    }