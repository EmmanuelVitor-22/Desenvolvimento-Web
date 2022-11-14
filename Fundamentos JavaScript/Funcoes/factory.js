// Função FACTORY é uma função que retorna um objeto
// Tem o objetivo de fabricar uma instanciar de objeto
// pode ter factory que gera um objeto contendo N funções

function criarPessoa() {
    return {
        name: "NomePessoa",
        idade: 23
    }
}
console.log(criarPessoa());

// Factory passando commo parametro

function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        descontoFixo: 0.1
    }
}

console.log(criarProduto('Celular', 1000));
console.log(criarProduto('Notebook', 2000));