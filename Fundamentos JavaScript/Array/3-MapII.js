// Exercicio map

const carrinho = [
    '{"item":"Borracha", "preco": 3.5}',
    '{"item":"lapis", "preco": 13.5}',
    '{"item":"Mochila", "preco": 28}',
    '{"item":"Estojo", "preco": 10}'
]

const converteParaJSON = json => JSON.parse(json); //converte o objeto para json
const obterPreco = produtoCarrinho => produtoCarrinho.preco;

const result = carrinho.map(converteParaJSON).map(obterPreco)
console.table(result)

let newPreco = 0;
const somarPreco = result.forEach((preco) => {

    return newPreco += preco;
});
console.log(newPreco)