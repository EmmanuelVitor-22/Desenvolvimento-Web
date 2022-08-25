// conceito de null e undefin ed

/*
O que significa passar os dados por referência?
Quando falamos que os dados são passados por referência significa que irão apontar para o mesmo objeto na memória 
– o novo objeto será apenas uma referência ao caminho do objeto original na memória 
*/
// criou um objeto a, que aponta um endereço na memoria pra o objeto criado
const a = {
        teste: true
    }
    // a const b aponta pra o mesmo endereço, ja qu eo valor de a é atribuido para b
const b = a;
// toda alteração que for feita em uma const será "sentida" pela outra
b.teste = false;
// Dados do tipo primitivo
primitivos = ['string', 'number', 'boolean', 'null', 'undefined', 'symbol']

// Objetos
objetos = ['array', 'funções', '{}']


// ***** Atribuição de dados por valor *****
// Nos dados primitivos os dados são passados por valor. Isso significa que 
// é criado uma cópia e acontece uma nova alocação de memória para aquele dado
let a = 1
let b = a

// Quando b é definido é criada uma nova alocação de memória que copia  o valor
// de a e atribui à variável b


// ***** Atribuição de dados por referência *****
// Nos objetos, quando os dados são passados por referência eles apontam para
// o mesmo endereço de memória. O novo objeto funciona apenas como uma 
// referência do objeto original. É como se fosse um atalho no desktop
let pessoa1 = {
    nome: 'João'
}
let pessoa2 = pessoa1

// Como pessoa2 é apenas uma referência, qualquer alteração em pessoa1 ou 
// pessoa2 vai ser refletida em ambos


// ***** Null e Undefined *****
let valor // variável não inicializada 
console.log(valor) // undefined 

valor2 // is not defined  (a variável não foi declarada)

valor = null // variável foi definida mas não aponta para nenhum endereço de memória