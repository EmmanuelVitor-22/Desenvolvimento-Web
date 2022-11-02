/*
Função que permite transformar um array em um unico elemento,
ou em outroo array ou em uma string (depende do critério definido);
Tem um parâmetro que será acumulado de chamada em chamada, toda vez que for passado
O resultado do reduce é o acumulador sempre é passado como resposta (da função anterior para a proxima função),
ou seja, o primeiro reduce recebe os dois  primeiros elementos de um array (0,1), onde o primeiro elemento é o acumuladoe
e o segundo é o item atual. O resultado disso é passado para a proxima função sendo o acumulador mais o elemento atual
e assim por diante.

EXPLICAÇÃO MAIS CLARA SOBRE: https://raullesteves.medium.com/javascript-entendendo-o-reduce-de-uma-vez-por-todas-c4cbaa16e380
*/

const alunos = [
    { nome: 'Paulo', nota: 10, bolsista: true },
    { nome: 'Ana', nota: 8, bolsista: false },
    { nome: 'Carla', nota: 10, bolsista: true },
    { nome: 'João', nota: 9, bolsista: false }
];

const resultado = alunos.map(notas => notas.nota);
// console.log(resultado)
const media = resultado.reduce(function (acumulador, notaAtual) {
    console.log(acumulador, notaAtual)
    return (acumulador += notaAtual)
});

// ou poderia ter sido feito numa unica linha.
// Detalhe, o acumulado pega como valor inicial o primeiro elemento do array

const result = alunos.map(n => n.nota).reduce(function (acumulator, actualNota) {
    return acumulator += actualNota
})
console.log(result / alunos.length)

// Se eu quiser passar um valor inicial, ´so colocar depois da callback o valor,exemplo:

const resulte = alunos.map(nn => nn.nota).reduce(function (acumula, actual) {
    return acumula += actual
}, 10); //(10 será passado como  valor inical, pode ser um array, um objeto, etc)
console.log(resulte)