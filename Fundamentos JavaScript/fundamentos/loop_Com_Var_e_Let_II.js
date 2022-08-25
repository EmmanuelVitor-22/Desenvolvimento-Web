
// LOOP parte 2

const funcao = []; //Criação ARRAY
 for (var i = 0;  i<10; i++ ) {
   funcao.push(function () {  //adiciona uma função anonima, no array, a cada iteração do laço
     console.log(i)
   })
 }

 funcao[2]();  // invoca a função
 funcao[8]()
//  mesmo valor para todas as posições

console.log("") 

const fun= []; //Criação ARRAY
for (let j = 0;  j<10; j++ ) {
  fun.push(function () {  //adiciona uma função anonima, no array, a cada iteração do laço
    console.log(j)
  })
}

fun[2]();  // invoca a função
fun[8]()
//aponta para o valor exato

