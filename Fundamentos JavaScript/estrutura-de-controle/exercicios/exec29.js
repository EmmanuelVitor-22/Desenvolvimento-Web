let valorSalario = parseFloat(prompt("Diga seu salario:"))

let descontoSalario = valorSalario * 0.11;

if (descontoSalario >= 334.29) {
    descontoSalario = 334.39;
}

console.log(descontoSalario);
