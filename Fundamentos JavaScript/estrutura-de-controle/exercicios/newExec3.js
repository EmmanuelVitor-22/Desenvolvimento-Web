

function somar(x, limite) {
    for (let i = 0; i <= limite; i++) {
        console.log(`${x} + ${i} = ${x + i}`);
    }
}

function subtrair(x, limite) {
    for (let i = 0; i <= limite; i++) {
        console.log(`${x} - ${i} = ${x - i}`);
    }
}

function multiplicar(x, limite) {
    for (let i = 0; i <= limite; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

function dividir(x, limite) {

    for (let i = 1; i <= limite; i++) {
        console.log(`${x} / ${i} = ${(x / i).toFixed(1)}`);
    }
}


multiplicar(10, 10)