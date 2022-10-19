// Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
// • Esse funcionário foi contratado em 2010, com salário inicial de R$1000,00;
// • Em 2011 recebeu aumento de 1,5% sobre seu salário inicial;
// • A partir de 2012 (inclusive), os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior

// Faça um programa que determine o salário atual desse funcionário.

let salarioInicial = 1000;
let percent = 1.5;
let salarioAtual = 0;
let ano = 2010;

console.log(`O ano é ${ano} e o seu salario R$ ${salarioInicial}`);
ano++;
while (ano <= 2017) {
    if (ano === 2011) {
        let percentualNovo = ((percent * salarioInicial) / 100);
        salarioAtual = salarioInicial + percentualNovo;
        console.log(`O ano é ${ano} e o seu salario aumentou R$ ${percentualNovo}, sendo assim  salario atual é R$ ${salarioAtual}`);

    } else {
        percent *= 2;
        let percentualNovo = (percent * salarioAtual) / 100;
        salarioAtual += percentualNovo;
        console.log(`O ano é ${ano} e o seu salario aumentou R$ ${percentualNovo.toFixed(2)}, sendo assim  salario atual é R$ ${salarioAtual.toFixed(2)}`);
    }
    ano++;
}