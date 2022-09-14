let numero = 11;
let subtrador = 3;
let resto, i = 0;
let numeroAtualizado = 0;



while (((numero >= 0) || (numero >= 1))) {
    numeroAtualizado = numero - subtrador;
    resto = numeroAtualizado;
    // console.log("resto" + resto);
    numero = resto;
}

console.log("numero" + resto);
