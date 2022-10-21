
// CRIANDO ARRAY ATRAVÉS DE INTANCIA DE OBJETO
const nomes = new Array('Fabi', 'Nunu', "usup");


// CRIANDO ARRAY ATRAVÉS DE FORMA LITERAL
const nome2 = ['Fabi', "usupA", 'Nunu', "usup"];

// acessando pelo index
// acessando primeiro elemento
console.table(nome2[0]);

// acessando primeiro elemento inexistente
console.table(nome2[6]);


// inserindo um elemento no fim do array
nome2.push("Auca");
console.table(nome2);


// Ordenando arrays (altera o array original)
nome2.sort();
console.table(nome2)

// Alguns metodos de array nn alteram o array original,
// eles retornam um novo array a parti da altereação


//deleta o elemento (não reorganiza, no indice q 
// for excluido será colocado undefined)
delete nome2[4]
console.table(nome2)


const newArr = ['juma', "lia", 'ana', "primor"];

/*
Splice serve para adicionar ou remover elemento em uma determinado
indice.
sintaxe = .splice(elemento, limite-de-exclusao)
*/
newArr.splice(1, 1); //nesse caso o indice é lia, e só vai ser excluida ela
console.table(newArr)

// para excluir e adicionar elementos
newArr.splice(1, 1, "adicionaEsse", "agoraEsse")

console.table(newArr)


// para adicionar elementos sem excluir
newArr.splice(4, 0, "adicionaEssessss", "agoraEssessdd")

console.table(newArr)