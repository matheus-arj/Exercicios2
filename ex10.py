from ast import Return
from turtle import left

# // relatorio de um funcionario
# // receber o valor do salario e UMA String com Nome e Sobrenome
# // Retornar um mapa/dicionario com as seguintes infs.: 
# // - salario com reajuste de 10%
# // - nome do meliante
# // - sobrenome do meliante

# def reajuste_salarial(): 
    
funcionarios = {}

salario = funcionarios['Salario'] = int(input("Digite o salario: "))
funcionarios['Nome'] = (input("Digite o primeiro nome: "))
funcionarios['Sobrenome'] = (input("Digite o sobrenome: "))


calculo = salario * 0.10
total = salario + calculo


funcionarios['Salario'] = total

Return (funcionarios)

print(funcionarios)
