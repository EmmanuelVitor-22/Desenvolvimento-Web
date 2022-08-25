// POSSUEM ESCOPO GLOBAL E DE FUNÇÃO

// var é visisvel no escopo global

// demonstração com escopo.
{
  {
    {
      {
        console.log("Parte 1");
        var teste1 = "Declarada dentro de um bloco";
        console.log(`${teste1} e usado dentro  `);
      }
    }
  }
}
console.log(`${teste1} e usado fora `);

function teste() {
  var local = 123;
  console.log(`${local} dentro do escopo da função`);
}
teste();
//console.log(local); //não é possivel acessar variavel fora do escopo da função

console.log("\nParte 2");
var numero = 1;
{
  var numero = 2; // esta no mesmo escopo
  console.log(`${numero} dentro do bloco`);
}
console.log(`${numero} fora do bloco`);
