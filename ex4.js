/* 4 - Função que receba um número inteiro e retorne o fatorial dele.*/

function fatorial(n){
    let value = 1;
    if (n == 0 || n == 1){
      return value;
    }else{
      for(var i = n; i >= 1; i--){
        value = value * i;
      }
      return value;
    }  
  }
  let n = 5;
  const result = fatorial(n)
  console.log("O fatorial de " + n + " é " + result);
 