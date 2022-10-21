// Executa um laço (loop)
/*
Serve para transformar um array em outro do mesmo tamanho
Ou seja, mapea o array em outro, com dos dados transformados
*/
// pode reeceber tres parametros:
// elelmento, o indice e o prorpio arra/objeto
// Map não altera o array original.a
// Ele gera um novo array

// exemplo:
const valores = [1, 2, 3, 4, 5];

let novosValores = valores.map(valor => {
    return valor * 2
})
console.table(novosValores);

// criando funcções para utilizar dntro de metodos .MAP
const soma = (valor) => valor + 15;
const triplo = valor => valor * 3;
const valorMonetario = valor => `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;

// Fazendo map encadeado
novosValores = valores.map(soma).map(triplo).map(valorMonetario);
console.table(novosValores)