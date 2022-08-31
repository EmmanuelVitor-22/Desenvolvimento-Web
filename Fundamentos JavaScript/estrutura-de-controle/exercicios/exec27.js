let primeiroValor = parseInt(prompt("Digite um numero"));
let segundoValor = parseInt(prompt("Digite um numero"));
let terceiroValor = parseInt(prompt("Digite um numero"));
let maior = 0, menor1 = 0, menor2 = 0;
let peso1 = 5, peso2 = 2.5, media;


if ((primeiroValor > segundoValor) && (primeiroValor > terceiroValor)) {
    maior = primeiroValor;
    if (segundoValor > terceiroValor) {
        menor1 = terceiroValor;
        menor2 = segundoValor
    } else {
        menor1 = segundoValor;
        menor2 = terceiroValor;
    }
} else if ((primeiroValor < segundoValor) && (segundoValor > terceiroValor)) {
    maior = segundoValor;
    if (primeiroValor > terceiroValor) {
        menor1 = terceiroValor;
        menor2 = primeiroValor
    } else {
        menor1 = primeiroValor;
        menor2 = terceiroValor;
    }
} else if ((primeiroValor < terceiroValor) && (segundoValor < terceiroValor)) {
    maior = terceiroValor;
    if (primeiroValor > segundoValor) {
        menor1 = segundoValor;
        menor2 = primeiroValor
    } else {
        menor1 = primeiroValor;
        menor2 = segundoValor;
    }
} else {
    console.log("valores são iguais");
}

maior *= peso1;
menor1 *= peso2;
menor2 *= peso2;

media = (maior + menor1 + menor2) / (peso1 + peso2 + peso2);
console.log(media);




