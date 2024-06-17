let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]
let media = 0
let soma = 0
let notaMaxima = notas[0]
let notaMinima = notas[0]
let acimaDaMedia = 0
let novaNota = 4.0
let notasReprovadas = 0

    for(let i = 0; i < notas.length; i ++){
        soma = soma + notas[i]
    }
    media = soma / notas.length
    console.log(media)


    for(let i = 0; i < notas.length; i ++){
        if(notas[i]> notaMaxima){ 
            notaMaxima = notas[i]
        }
        if(notas[i] < notaMinima){
            notaMinima = notas[i]
        }
    }
    console.log(`A maior nota é ${notaMaxima} e a menor nota é ${notaMinima}.`)


    for(let i = 0; i < notas.length; i ++){
        if(notas[i] > media) 
        acimaDaMedia ++
    }
    console.log(`A quantidade de notas a cima da média é ${acimaDaMedia}. `)

    notas.push(novaNota)
    console.log(`Lista atualizada de notas ${notas}`)

    for(let i = 0; i < notas.length; i ++){
        if(notas[i] < 6.0){
            notasReprovadas ++ 
        }
    }
    console.log(`A quantidade de notas abaixo de 6.0 é ${notasReprovadas}.`)

    //A) Ele esta declarando a variavel notas com suas notas, estapercorrendo as notas com o "for" e imprimindo as nortas com o "console.log".
    
    //B) A variavel "nota" é a entrada e o "console.log" é a saida.

    //C) variaveis:

    //notas: são os valores citados na atividade 
    //soma: para somar as notas
    //madia: para colocar a media das notas
    //notaMaxima: para colocar a maior nota 
    //notaminima: para colocar a menor nota 
    //acimaDaMedia: para colocar todas as notas que estão acima da media 
    //novaNota: para colocar uma nova nota na minha lista
    //notasReprovadas: para contar quantas notas tem abaixo da media 6.0