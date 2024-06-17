var nome = ''

console.log('Digite seu nome')

process.stdin.on('data', function(data) {

    let nome = data.toString();

    console.log ('Seja bem vindo ' + nome)

    process.exit()

});