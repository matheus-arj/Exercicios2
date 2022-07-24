/* 7 - Recebe uma frase e devolve ela com a ordem das palavras invertida */ 
// function reverseString(palavras) {
//     var newString = "";
//     for (var i = palavras.length - 1; i >= 0; i--) {
//         newString += palavras[i];
//     /*  newString = newString + palavras[i]; */

//     }
//     return newString;
// }
// console.log(reverseString('Oi eu sou o Goku'));


function reverterOrdemPalavras(fraseinicial) {
    var arrayDePalavras = fraseinicial.split(" ");
    var fraserRevertida = []

    for (var i = arrayDePalavras.length - 1; i >= 0; i--) {
        fraserRevertida.push(arrayDePalavras[i])
    }

    return fraserRevertida = fraserRevertida.join(" ")
}

console.log(reverterOrdemPalavras('Eu sou o Goku'));