// Filtrar elementos em sub arrays/objetos 
// a partir de um determinado criterio de filtro


const produtos = [
    { nome: "talher", preco: 999, fragil: true },
    { nome: "louça", preco: 499, fragil: true },
    { nome: "arroz", preco: 12.49, fragil: false }
];
// recebe tres parametros (como o map e o foreach)
// no corpo da função a logica retorna true ou false, gerando assim um
// novo array onde será formado pelos elementos que corresponderam (true) ao filtro

// nessa não retorna nada
console.log(produtos.filter(function (p) {
    return false
}));

// só fragil
const isFragil = produtos.filter(p => {
    return p.fragil
});
console.log(isFragil);

// só caro
const isCaro = produtos.filter(p => {
    return p.preco > 500
});

console.log(isCaro);

