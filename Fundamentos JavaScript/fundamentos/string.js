const nome1 = "Paulo"

// String são como arrays
// O metodo .charAt mostra o valor que ocupa o indice 
console.log(nome1[4])
console.log(nome1.charAt(4))
console.log(nome1.charAt(5))

// o metodo .charCodeAt apresenta o valor(na tabela ASCII)
//  do indice na posição passada
console.log(nome1.charCodeAt(3))
    // indexOf
console.log(nome1.indexOf('3'))

console.log(nome1.substring(1))
console.log(nome1.substring(0, 3))

console.log('nome1 '.concat(nome1).concat("!"))
console.log('nome1 ' + nome1 + "!")
console.log(nome1.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))