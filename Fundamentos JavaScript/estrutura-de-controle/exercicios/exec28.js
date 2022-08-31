let palavra = "TareRirOru";
let vogal = ["a", "e", "i", "o", "u"], consoante;
let palavraTudoMinusculo = palavra.toLowerCase();
console.log(palavraTudoMinusculo);
for (let i = 0; i < palavraTudoMinusculo.length; i++) {
    for (let index = 0; index < vogal.length; index++) {
        if (palavraTudoMinusculo[i] === vogal[index]) {
            console.log(`${palavraTudoMinusculo[i]}`);
        } else {
            console.table(`${palavraTudoMinusculo[i]}`);;
        }

    }
}
