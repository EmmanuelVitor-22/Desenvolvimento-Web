let precoLitroDoAlcool = 1.9;
let precoLitroDaGasolina = 2.7;
let op = (prompt("Digite A para alcool ou G para gasolina"));
let opMinusculo = op.toLowerCase;
switch (op) {
    case 'a':
        let qtdLitroDeAlcool = parseFloat(prompt("Diga a quantidade de alcool"));
        if (qtdLitroDeAlcool <= 25) {
            let desconto = 0.2
            let totalAlcool = (precoLitroDoAlcool * qtdLitroDeAlcool);
            let valorDoDescontoDoAlcool = totalAlcool * desconto;
            let aPagar = totalAlcool - valorDoDescontoDoAlcool
            console.log(aPagar.toFixed(2));
        } else {
            let desconto = 0.4
            let totalAlcool = (precoLitroDoAlcool * qtdLitroDeAlcool);
            let valorDoDescontoDoAlcool = totalAlcool * desconto;
            let aPagar = totalAlcool - valorDoDescontoDoAlcool
            console.log(aPagar.toFixed(2));
        }
        break;
    case 'g':
        let qtdLitroDeGasolina = parseFloat(prompt("Diga a quantidade de Gasolina"));
        if (qtdLitroDeGasolina <= 25) {
            let desconto = 0.3
            let totalGasolina = (precoLitroDaGasolina * qtdLitroDeGasolina)
            let valorDoDescontoDaGasolina = (precoLitroDaGasolina * qtdLitroDeGasolina) * desconto;
            let aPagar = totalGasolina - valorDoDescontoDaGasolina;
            console.log(aPagar.toFixed(2));
        } else {
            let desconto = 0.5
            let totalGasolina = (precoLitroDaGasolina * qtdLitroDeGasolina)
            let valorDoDescontoDaGasolina = (precoLitroDaGasolina * qtdLitroDeGasolina) * desconto;
            let aPagar = totalGasolina - valorDoDescontoDaGasolina;
            console.log(aPagar.toFixed(2));
        }
        break;

}