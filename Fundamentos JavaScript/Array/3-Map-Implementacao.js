//Implementando MAP

Array.prototype.map2 = function (callback) {
    const newArr = [];
    for (let index = 0; index < this.length; index++) {
        newArr.push(callback(this[index], index, this))
    }
    return newArr
}

const carrinho = [
    '{"item":"Borracha", "preco": 3.5}',
    '{"item":"lapis", "preco": 13.5}',
    '{"item":"Mochila", "preco": 28}',
    '{"item":"Estojo", "preco": 10}'
]

const converteParaJSON = json => JSON.parse(json); //converte o objeto para json
const obterPreco = produtoCarrinho => produtoCarrinho.preco;

const result = carrinho.map2(converteParaJSON).map2(obterPreco)
console.table(result)
