let primeiroValor = parseInt(prompt("Digite um numero"));
let segundoValor = parseInt(prompt("Digite um numero"));
let terceiroValor = parseInt(prompt("Digite um numero"));
let maior = 0, menor = 0, soma;


if ((primeiroValor >= segundoValor) &&
    (primeiroValor > terceiroValor) &&
    (segundoValor >= terceiroValor)) {

    menor = terceiroValor;
    soma = primeiroValor + segundoValor;
    console.log(` O menor valor é: ${menor}`);
    console.log(`A soma dos maiores valores é: ${soma}`);

} else if ((primeiroValor >= terceiroValor) && (primeiroValor > segundoValor) && (terceiroValor >= segundoValor)) {
    menor = segundoValor;
    soma = primeiroValor + terceiroValor;
    console.log(` O menor valor é: ${menor}`);
    console.log(`A soma dos maiores valores é: ${soma}`);
}
else if ((segundoValor >= terceiroValor) && (segundoValor > primeiroValor) && (terceiroValor > primeiroValor)) {
    menor = primeiroValor;
    soma = segundoValor + terceiroValor;
    console.log(` O menor valor é: ${menor}`);
    console.log(`A soma dos maiores valores é: ${soma}`);
} else {
    console.log("Todos os valores digitados são iguais");
}


