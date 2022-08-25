// função é uma ação, que é executada atraves de uma chamada, sempre que
// disparado determinado evento

// é um bloco de codigo que executa processo com base numa sentença de codigo
// estrutura:
//  chamada, parametro, retorno, ação

// função sem retorno 
function soma(valor1, valor2) {
    console.log(valor1 + valor2)
}
soma(4, 5)
soma(1) // um numero + undefined ==NaN
soma() // undefined+undefined = Nan

// função com retorno
function parimpar(numero) {
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }

}

console.log(parimpar(11));
console.log(parimpar(12));

