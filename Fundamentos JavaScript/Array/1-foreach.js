
// FOREACH
/*
DENTRO DO METODO FOREACH É PASSADA UM FUNÇÃO CALBACK COM DOIS PARAMETROS
 PRIMEIRO PARAMETRO É O ITEM QUE TA PERCORRENDO NO ARRAY
 SEGUNDO PARAMETRO  É O INDICE DESSE ARRAY
 PODE PASSAR O PROPRIO ARRAY/OBJETO COMO TERCEIRO PARAMETRO (OPCIONAL)
 arr.forEach(function (item_pecorrido, indice_do_item, array)){
    corpo
 }
 **PS: PODE SER UMA ARROW FUNCTION
*/

array = ['fabio', 'claudio', 'Donny', 'Ulli'];
arr = ['Luki', 'Breno', 'Sandro', 'Aldo'];

array.forEach(function (nome, indice) {
    console.table(`${indice + 1} ${nome}`)
});

arr.forEach(nome => console.table(`${nome}`));

/*
 Pode-se passar uma função para uma variavel e usar ela como parametro
e passar dentro de um forEach
*/
let notas = [10, 9, 8, 7, 6];
const exibirNotas = nota => console.log(nota);
notas.forEach(exibirNotas);