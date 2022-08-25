// 20. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada
// maior do que ou igual às duas prestações, as quais devem ser iguais, inteiras e as maiores
// possíveis. Por exemplo, se o valor da mercadoria for R$ 270,00, a entrada e as duas
// prestações são iguais a R$ 90,00; se o valor da mercadoria for R$ 302,75, a entrada é de
// R$ 102,75 e as duas prestações são a iguais a R$ 100,00. Escreva um programa que
// receba o valor da mercadoria e forneça o valor da entrada e das duas prestações, de
// acordo com as regras acima. Observe que uma justificativa para a adoção desta regra é
// que ela facilita a confecção e o consequente pagamento dos boletos das duas prestações.

let valorDoProduto = 30, entrada, parcela1,parcela2;
let parcelas = valorDoProduto => parseInt(valorDoProduto/3);
let restoMaiorQueCem = valorDoProduto%100, restoMenorQueCem = valorDoProduto%10;

function funcaoParaParcelarCompra(valorDoProduto) {

        if(valorDoProduto >= 100){
           if (restoMaiorQueCem === 0) {
                entrada = valorDoProduto - (2*parcelas(valorDoProduto))
                console.log(`Valor da entrada: ${entrada}`);
            }else{
                entrada = valorDoProduto - (2*parcelas(valorDoProduto))
                console.log(`Valor da entrada: ${entrada}`);
            } 

            parcela1 = parcelas(valorDoProduto);
            parcela2 = parcelas(valorDoProduto);
            console.log(`Valor da 1ª parcela é: ${parcela1}`);
            console.log(`Valor da 2ª parcela é: ${parcela2}`);
    } else{
            (restoMaiorQueCem === 0) ? entrada = parseInt(valorDoProduto/3) 
                                    :  entrada = parcelas(valorDoProduto)+restoMenorQueCem; 
            console.log(`Valor da entrada: ${entrada}`);

            parcela1 = parcelas(valorDoProduto);
            parcela2 = parcelas(valorDoProduto);
            console.log(`Valor da 1ª parcela é: ${parcela1}`);
            console.log(`Valor da 2ª parcela é: ${parcela2}`);
    }    
}

console.log(funcaoParaParcelarCompra(270));
console.log();
console.log(funcaoParaParcelarCompra(302.75));
console.log();
    

