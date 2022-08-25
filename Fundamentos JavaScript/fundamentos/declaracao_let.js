//  // POSSUEM ESCOPO GLOBAL, DE BLOCO E DE FUNÇÃO

// mesmo com mesmo nome, o tipo de variavel respeita o escopo
let valor = 1;
{
  {
    {
      let valor = 2;
      console.log(`${valor} dentro do bloco`); // escopo interno, não sobrescrve o de fora
    }
  }
}
console.log(`${valor} fora do bloco`); //respeita o escopo  externo e não e sobrescrito

/*
prioridade é do escopo menor, mas 
se no escopo inteno não existir a variavel, buca sempre no escopo acima
 e utiliza o valor deal
*/
let valor2 = 2;

{
  console.log(`${valor2} dentro`);
}
console.log(`${valor2} fora`);
