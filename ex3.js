/* Função que recebe um array com 5 números inteiros, e retorna um array com os mesmo valores na ordem inversa. */

/* PRIMEIRO TESTE FEITO COM VARIÁVEL 

var numerosInversos = [1, 2, 3]
numerosInversos.reverse();

console.log(numerosInversos)

*/

function reverseNumeros(numeros) {
    var novoNumero = []
    for (var i = numeros.length -1 ; i >= 0 ; i--) {
        novoNumero.push(numeros [i]);
     /* novoNumero = novoNumero + numeros [i]; */

    }

    return novoNumero
}

 console.log(reverseNumeros([10, 20, 30, 40, 50]))
