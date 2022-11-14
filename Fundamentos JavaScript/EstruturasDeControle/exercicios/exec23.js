let numero = 111;

function isPar(numero) {
    let isPar = ((numero%2) === 0)
    
    isPar ? console.log(`O numero ${numero} é par`) : console.log(`O numero ${numero} é impar`)
}


console.log(isPar(100))
console.log(isPar(1502))
console.log(isPar(96))
console.log(isPar(25))
console.log(isPar(12))
console.log(isPar(9))
console.log(isPar(3))
console.log(isPar(1))