/* Função que recebe um array com 5 números inteiros, e retorna um array com os mesmo valores na ordem inversa. */

/* PRIMEIRO TESTE FEITO COM VARIÁVEL 

var numerosInversos = [1, 2, 3]
numerosInversos.reverse();

console.log(numerosInversos)

*/


function inversaoDeNumeros(num1, num2, num3, num4, num5){

    var numeros = [num1, num2, num3, num4, num5]

    numeros.reverse(num1, num2, num3, num4, num5);

    return numeros
    
}

console.log(inversaoDeNumeros(8, 9, 10, 11, 12))