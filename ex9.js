// relatorio de um funcionario
// receber o valor do salario e UMA String com Nome e Sobrenome
// Retornar um mapa/dicionario com as seguintes infs.: 
// - salario com reajuste de 10%
// - nome do meliante
// - sobrenome do meliante

// 1 TESTE: 
// function calculoDeReajuste(salario, nome) {

//     var reajuste = salario * 0.10
//     var total = salario + reajuste
    
//     return total + nome    
// }

// console.log(calculoDeReajuste(3000, "Matheus Araujo"));

// 2 TESTE: 
// function calculoDeReajuste(salario, nome) {

//     var reajuste = salario * 0.10
//     var total = salario + reajuste
    
//     return {total, nome}    
// }

// const inforFuncionario = calculoDeReajuste(2400, "Matheus Araujo")

// console.log(`Salario: ${inforFuncionario.total} - Nome: ${inforFuncionario.nome}`);


function calculoDeReajuste() {
    const funcionario = {
        salario: 3000,
        nome: "Matheus",
        sobrenome: "Araujo"
    }
    
    var reajuste = salario * 0.10
    var total = salario + reajuste
    
    return total + nome    
}

