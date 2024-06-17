let notas = [7, 6, 8, 5, 4, 9, 3, 2, 1, 8 ]
let media = 0
let notaAlta = 0
let notaBaixa = 100
let somaNota = 0

// nota mais alta, nota mais baixa
for (let i = 0; i <notas.length; i ++) {
    if (notas[i] > notaAlta){
        notaAlta = notas[i]
    }
    if (notas[i] > notaBaixa){
        notaBaixa = notas[i]
    }
}
    notas.push(7.5)
// calcular media
    for (let i = 0; i <notas.length; i ++){
        somaNota = somaNota + notas[i]
        media = somaNota / notas.length
    }

    for (let i = 0; i <notas.length; i ++) {
        if (notas[i] >= 8){
            console.log(`Você passou`)
        }
        else{
            console.log(`Você reprovou`)
        }
            
    }
    console.log(`Sua media é ${media}`)
    console.log(`Nota mais alta é ${notaAlta} e sua nota mais baixa é ${notaBaixa} `)
    console.log(`Notas da turma ${notas}`)
