// DIferenciar o que seria um codigo declarativo de um codigo imperativos

//  No imperativo o COMO fazer é o foco
// No declarativo o que tem que ser feito é mais importante




const alunos = [
    { nome: 'Paulo', nota: 10, bolsista: true },
    { nome: 'Ana', nota: 8, bolsista: false }
];
// codigo imperativo

let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);


// codigo declarativo
const getNota = aluno => aluno.nota
const somar = (total, valorNota) => total + valorNota;
const total2 = alunos.map(getNota).reduce(somar);
let media = total2 / alunos.length;
console.log(media)