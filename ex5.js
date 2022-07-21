/* 5 - Função que recebe array de números inteiros e devolve maior numero do array */

function maiorNumero(arrayDeNumeros) {

var maior = 0;

for (var i = 0; i < arrayDeNumeros.length; i++) {
   if ( arrayDeNumeros[i] > maior ) {
      maior = arrayDeNumeros[i];
   }
}

 return maior

}

console.log(maiorNumero([2, 200, 54, 140, 98, 12]))