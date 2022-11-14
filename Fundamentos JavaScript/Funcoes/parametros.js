// Exemplo de parametros variaveis 
function somar() {
    let soma = 0;
    // arguments é um array interno do js
    for (key in arguments) {
        soma += arguments[key]
    }
    return soma
}

console.log("Parametros variaveis");
console.log(somar())
console.log(somar(1))
console.log(somar(12, 12, 13))
console.log("");


// Exemplo de parametros padrão
// estrategia I
function somar1() {
    v1 = v1 || 1 //v1 pode ser ele mesmo, mas se nn receber nada ele é um por padrão
    v2 = v2 || 1 //v2 pode ser ele mesmo, mas se nn receber nada ele é um por padrão
    v3 = v3 || 1 //v3 pode ser ele mesmo, mas se nn receber nada ele é um por padrão

    return v1 + v2 + v3;
}

console.log("Valor padrão estilo 1");
console.log(somar1());
console.log(somar1(1));
console.log("");

function somar2() {
    let a1 = a1 !== undefined ? v1 : 1;//Nese faz um tipo de verificação 
    let b2 = 1 in arguments ? b2 : 1; //Faz verificacao em arguments
    let c3 = isNaN(c3) ? 1 : c3;//verifica  se é um numero (é a mais segura)

    return a1 + b2 + c3
}


console.log("Valor padrão estilo 2,3 e 4");
console.log(somar2());
console.log(somar2(1));
console.log("");

function somar2(x1 = 1, x2 = 1, x3 = 1) {
    // valor vem por parametro padrão, se for alterado recebe o valor
    // se não, vai ser o que está padrao

    return x1 + x2 + x3
}


console.log("Valor padrão SIMPLES");
console.log(somar2());
console.log(somar2(1));
console.log("");