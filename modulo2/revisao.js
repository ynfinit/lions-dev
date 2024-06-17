let numero

console.log('Digite um numero')

process.stdin.once('data', function(data) {
    numero = parseFloat(data.toString().trim())
    processamento(numero)
    process.exit()
    })

   function processamento(numero){

   if (numero % 5 == 0){
    console.log(`Esse numero ${numero} é divisivel por 5`)
   }
   else {
    console.log(`Esse numero ${numero} não é divisivel por 5`)
   }
}
