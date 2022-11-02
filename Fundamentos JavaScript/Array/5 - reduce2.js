// Desafio

const alunos = [
    { nome: 'Paulo', nota: 10, bolsista: true },
    { nome: 'Ana', nota: 8, bolsista: false },
    { nome: 'Carla', nota: 10, bolsista: true },
    { nome: 'João', nota: 9, bolsista: false }
];

// Desafio 1: retornar se todos os alunos são bolsistas
const allBolsist = (result, bolsista) => result && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(allBolsist));

// Desafio 2 : verificar se existe algum aluno é bolsista

const anyBolsist = (result, bolsista) => result || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(anyBolsist));

