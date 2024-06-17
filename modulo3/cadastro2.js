//Aqui são importados dois módulos. O primeiro é o buffer, do qual é extraído o objeto constants.
// O segundo é o módulo readline, que é utilizado para criar uma interface de leitura no terminal.

const { constants } = require('buffer')
const readline = require('readline')
//.

//Aqui é criada uma interface de leitura (rl) que lê a entrada do usuário do stdin (entrada padrão) e escreve no stdout (saída padrão).
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})
//.

//Um array funcionarios é definido para armazenar objetos representando funcionários.
// Um funcionário inicial (Luiz) é definido e adicionado ao array funcionarios.
let funcionarios = []

let Luiz = {
    nome: 'Luiz',
    cargo: 'chefe',
    salario: 3000
}
funcionarios.push(Luiz)
let maiorSalario = funcionarios[0].salario

//Uma função chamada exibirMenu() é chamada para exibir o menu inicial.
exibirMenu()
//.


function exibirMenu() {
    console.log(`
Menu:
    1. Cadastrar funcionário
    2. Listar todos os funcionários
    3. Exibir funcionário com maior salário 
    4. Editar um funcionario
    5. Remover um funcionario
    6. Sair
    `)

    rl.question('Escolha uma opção: ', (opcao) => {
        switch (opcao) {
            case '1':
// cadastrarFuncionario()
                    cadastrarFuncionario()
                break
            case '2':
// listarFuncionarios()
                    listarFuncionarios()
                    exibirMenu()
                break
            case '3':
// exibirMaiorSalario()
                    exibirMaiorSalario()
                    exibirMenu()
                break
            case '4':
// editarFuncionario()
                    editarFuncionario()
                    exibirMenu()
                break
            case '5':
// removerFuncionario()
                    removerFuncionario()
                   
                break    
            case '6':
// sair do menu
                    rl.close()
                break
            default:
                console.log('Opção inválida, tente novamente.')
                exibirMenu()
            }
        })
    }

    //cadastrarFuncionario(): Solicita ao usuário que digite informações sobre um novo funcionário e adiciona esse funcionário ao array funcionarios
    function cadastrarFuncionario() {
        rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
        rl.question('Digite o salário do funcionário: ', (salario) => {
        funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario)})
        console.log(`Funcionário cadastrado com sucesso!`)
        exibirMenu()
        })
        })
        })
        }



 // listarFuncionarios(): Exibe todos os funcionários atualmente armazenados no array funcionarios.
    function listarFuncionarios(){
            
                if(funcionarios === 0){
                    console.log('Está vazio')
                }
                else{
                console.log(funcionarios)
                }
            }
 
  
            
 // exibirMaiorSalario(): Calcula e exibe o funcionário com o maior salário atualmente no array funcionarios.
    function exibirMaiorSalario(){
            for(let i = 0; i < funcionarios.length; i ++){
                if(maiorSalario < funcionarios[i].salario){
                    maiorSalario = funcionarios[i].salario
                    
                }
        }
        console.log(`O maior salário é de ${funcionarios.maiorSalario}`)
    }




    function editarFuncionario(){
        if (funcionarios.length == 0) {
            console.log('Não a nenhum funcionario')
            } 
        else {
            rl.question('Digite o funcionario que deseja editar: ', (numero) => {
                if (numero > 0 && numero <= funcionarios.length) {
                    rl.question('Digite o novo nome: ', (nome) => {
                        rl.question('Digite o novo cargo: ', (cargo) => {
                            rl.question('Digite o novo salario: ', (salario) => {
                                funcionarios[numero - 1] = {
                                    nome,
                                    cargo,
                                    salario
                                    }
                                console.log('editado com sucesso!')
                                exibirMenu()
                            })
                        })
                    })
            } 
            else {
                console.log('Funcionario inválido, tente novamente.')
                exibirMenu()
            }
        })  
            
    }
}




    function removerFuncionario(){
        rl.question('Digite o nome do funcionario que deseja remover: ', (numero) => {

            if(numero > 0 && numero <= funcionarios.length ){
                funcionarios.slice(numero -1, 1)
                console.log('funcionario removido com sucesso')
                exibirMenu()
            }
            else{
                console.log('numero invalido, tente novamente')
                exibirMenu()
            }
        })
    }

