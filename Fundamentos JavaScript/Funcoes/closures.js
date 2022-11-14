/*
É o escopo criado quando a crido quando a função é declarada
Permite a função acessar e manipular variaveis esternas a ela
*/

// exemplo:

function pai() {
    let x = 1;
    function filho() {
        console.log(x);
        x++;
    }
    return filho;
}

let cont = pai();
let i = 0
while (i < 5) {

    i++
}