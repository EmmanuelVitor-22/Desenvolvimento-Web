// armazenar função em variavel
const parimpa = function(numero) {
    if (numero % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}
console.log(parimpa(5))

let nome = "maria"
const mostrarNome = function (){
    console.log(nome)
}
mostrarNome(nome)
// armazenar arrow function  em uma variavel
 const soma = (a, b)=>{
     return a+b;
 }
console.log(soma(2,5))
 
// retorno implicito (não precisa colocar o  nome "return")
// função de apenas uma unica linha
const retornoInplicito = (a, b )=> a-b;
console.log(retornoInplicito(4,5));

const  retonoImplicito2 = s => s;
console.log(retonoImplicito2('sas')) 

const  retonoImplicito3 = n => console.log(n);
retonoImplicito3('teste');
