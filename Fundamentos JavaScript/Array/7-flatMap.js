// Criação do FlatMap

const escola = [
    {
        turmas: "M1",
        alunos: [
            { nome: 'Paulo', nota: 10 },
            { nome: 'Ana', nota: 8 },
        ]
    },
    {
        turmas: "M",
        alunos: [
            { nome: 'Carla', nota: 10 },
            { nome: 'João', nota: 9 }]
    }
];

const getAlunoNota = aluno => aluno.nota;
const getNotasTurmas = turma => turma.alunos.map(getAlunoNota);

const notas1 = escola.map(getNotasTurmas);
console.log(notas1)

// console.log([].concat([1, 2], [0, 01], 21, "a", [["luftal"]])) (ideia do flatmap é fazer o mesmo resultado disso)
Array.prototype.flatMap = function (calback) {
    return Array.prototype.concat.apply([], this.map(calback))
};
const notas2 = escola.flatMap(getNotasTurmas);
console.log(notas2)
