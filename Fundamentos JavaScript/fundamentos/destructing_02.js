// exemplo basico de desestruturação de array com um elemento 
// nesse caso a variavel posição recebe o valor do elemento do array
const [posicao] = [0];
console.log(posicao)

//
const [numero,, numero2] = [12,13,14]
console.log(numero, numero2)
const [,n,, n2] = [12,13,14]
console.log(n, n2)
