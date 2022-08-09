/* 1 - Recebe base e expoente, devolve resultado da potencia */

// function calculationExp(base, expoente){

//     return Math.pow(base, expoente)
    
// }

// console.log(Math.pow(2,7))


// function calculationExp(base, expoente){
//     var base = 0
//     for (let i = 0; i <= expoente; i++)
     
//     expoente **= base


// }

// console.log(2,6);


function calcular(base, expoente){

    var resultado = 1

    for (var i = 1; i < expoente; i++){

        resultado = resultado * base;
     }

     return resultado

    
}

console.log(calcular(3, 4))




