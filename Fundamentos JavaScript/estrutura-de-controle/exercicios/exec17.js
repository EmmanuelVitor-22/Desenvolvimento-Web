// Um programa para gerenciar os saques de um caixa eletrônico deve possuir algum
// mecanismo para decidir o número de notas de cada valor que deve ser disponibilizado
// para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima"
// no sentido de que as notas de menor valor fossem distribuídas em número mínimo
// possível. Por exemplo, se a quantia solicitada fosse R$ 87,00, o programa deveria indicar
// uma nota de R$ 50,00, três notas de R$ 10,00, uma nota de R$ 5,00 e duas notas de R$
// 1,00. Escreva um programa que receba o valor da quantia solicitada e retorne a
// distribuição das notas de acordo com o critério da distribuição ótima (considere existir
// notas de R$1,00; R$2,00; R$5,00; R$10,00; R$20,00; R$50,00 e R$100,00)

let nota1, nota2, nota5, nota10, nota20, nota50, nota100, valorSolicitado=0, novoValor=0;

function calcularQuantidadeDeNotas(valorSolicitado) {
        
    nota100 = parseInt(valorSolicitado/100);
    if(nota100 > 0){
        console.log(`Serão ${nota100} notas de R$100 reais`);
    }
    novoValor =  (valorSolicitado%100);

    nota50 = parseInt(novoValor/50);
    if(nota50 > 0){
        console.log(`Serão ${nota50} notas de R$50 reais`);
    }
    novoValor =  (novoValor%50);

    nota20 = parseInt(novoValor/20);
    if(nota20 > 0){
        console.log(`Serão ${nota20} notas de R$20 reais`);
    }
    novoValor = (novoValor%20);

    nota10 = parseInt(novoValor/10);
    if(nota10 > 0){
        console.log(`Serão ${nota10} notas de R$10 reais`);
    }
    novoValor = (novoValor%10);

    nota5 = parseInt(novoValor/5);
    if(nota5 > 0){
        console.log(`Serão ${nota5} notas de R$5 reais`);
    }
    novoValor = (novoValor%5);

    nota2 = parseInt(novoValor/2)
    if(nota2 > 0){
        console.log(`Serão ${nota2} notas de R$2 reais`);
    }
    novoValor = (novoValor%2);

    nota1 = parseInt(novoValor/1);
    if(nota1 > 0){
        console.log(`Serão ${nota1} notas de R$1 real`);
    }

}

console.log(calcularQuantidadeDeNotas(100))
console.log(calcularQuantidadeDeNotas(1502))
console.log(calcularQuantidadeDeNotas(96))
console.log(calcularQuantidadeDeNotas(25))
console.log(calcularQuantidadeDeNotas(12))
console.log(calcularQuantidadeDeNotas(9))
console.log(calcularQuantidadeDeNotas(3))
console.log(calcularQuantidadeDeNotas(1))