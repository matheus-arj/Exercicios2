function calcularMedia(arrayDeNumeros) {
    var tamanhoDoArray = arrayDeNumeros.length
    var somaTotal = 0

    for (let i = 0; i < arrayDeNumeros.length; i++) {
        somaTotal = somaTotal + arrayDeNumeros[i]
    }
    
    return somaTotal / arrayDeNumeros.length
}

console.log(calcularMedia([8, 4, 3, 8]))