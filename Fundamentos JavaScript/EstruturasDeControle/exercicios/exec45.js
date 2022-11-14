let numero=0, soma=0, media=0;

for (let index = 0; index < 5; index++) {
  do{
    numero = parseFloat(prompt("Digite o numero:"));
  }while((numero<0)|| (numero>10));
    soma += numero;   
  console.log(soma);
}
media = soma/5;
console.log(media)
