// 24. Escreva um programa que leia três números e mostre o maior entre eles.

var primeiro, segundo ,terceiro, maior ;

function verificarMaior( primeiro, segundo, terceiro)
{

if ((primeiro > segundo) && (primeiro> terceiro)) {
     maior = primeiro
     console.log(maior)
} else if ((segundo>primeiro) && (segundo>terceiro)) {
    maior = segundo
    console.log(maior)
} else if ((terceiro>segundo) && (terceiro>primeiro)) {
    maior = terceiro
    console.log(maior)
}else{
    console.log("Todos os numeros são iguais")
} 
}

console.log(verificarMaior(5, 18, 4))
console.log(verificarMaior(1, -1, 4))
console.log(verificarMaior(0, 3, 2))
console.log(verificarMaior(55, 300, 4))
console.log(verificarMaior(5, 3, 8))