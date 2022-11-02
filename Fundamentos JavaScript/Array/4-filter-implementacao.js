

Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { //se isso retornar true
            newArray.push(this[i]) //esse elemente será inserido no array
        }
    }
    return newArray
}



const produtos = [
    { nome: "talher", preco: 999, fragil: true },
    { nome: "louça", preco: 499, fragil: true },
    { nome: "arroz", preco: 12.49, fragil: false }
];

const caro = produtos => produtos.preco > 500;
const fragil = produtos => produtos.fragil;

console.log(produtos.filter2(caro).filter2(fragil));