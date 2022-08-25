// Aula sobre OBJETOS
// objetos tem caracteristicas/atributos, que são como as variaveis dele
// tem metodos que são como funções que esse objeto faz

// objeto em JS é uma COLEÇÂO de chave:valor!!!!!!!!!!!!!!!

// criando obejto de forma literal atribuindo chave e valor de forma dinamica

const pessoa = {};
pessoa.nome = 'lucas';
pessoa.idade = 22;
pessoa.cor = 'branco';
console.log(pessoa);

// criando obejto de forma literal atribuindo chave e valor dentro do objeto
const pessoa2 = {
    nome: 'teste',
    idade: 23,
    cor: 'preto'
}
console.log(pessoa2);

// retornar somente as Chaves do objeto
console.log(Object.keys(pessoa))
    // retornar somente os Valores do objeto
console.log(Object.values(pessoa))
    // gerar um Array com chaves e valores do objeto
console.log(Object.entries(pessoa))
    // Remover atribaauto de um objeto
delete pessoa.idade

// criando um a partir de um objeto
const arr = Object.entries(pessoa);
console.log(arr[0])