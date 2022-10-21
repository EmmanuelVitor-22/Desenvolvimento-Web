// Implementacao de um forEach na pratica, por tras dos panos

/*
Dentro da Prototype do array vai ser criada a função 
que executa/pecorre o array
*/

Array.prototype.forEach2 = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this);

    }
}
array = ['fabio', 'claudio', 'Donny', 'Ulli'];

array.forEach2(function (nome, indice) {
    console.table(`${indice + 1} ${nome}`)
});