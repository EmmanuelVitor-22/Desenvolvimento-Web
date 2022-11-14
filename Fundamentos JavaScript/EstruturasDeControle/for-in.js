// FORIN  PECORRE A ESTRUTURA
// GERALMENTE UTILIZADOS EM ARRAY E OBJETOS

// TRAZ O INDICE DO ELEMENTO E NÃO O ELEMENTO.
// NO CASO O "ATRIBUTO/CHAVES"

const people = {
    name: "juliana",
    age: 18,
    height: 1.56,
    colorSkin: "black"
}
for (const key in people) {

    console.log(key);


}
const notes = [10, 9, 8, 6, 8];

for (const nota in notes) {
    console.log(nota)
}