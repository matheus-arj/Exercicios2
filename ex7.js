/* 7 - Recebe uma frase e devolve ela com a ordem das palavras invertida */ 
function reverseString(palavras) {
    var newString = "";
    for (var i = palavras.length - 1; i >= 0; i--) {
        newString += palavras[i];
    /*  newString = newString + palavras[i]; */

    }
    return newString;
}
console.log(reverseString('Oi eu sou o Goku'));