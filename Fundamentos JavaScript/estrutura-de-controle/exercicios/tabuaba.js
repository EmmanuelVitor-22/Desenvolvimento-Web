let valor =0, valor2=1;

function somar(valor, valor2){
  while(valor<=10){
    valor+valor2;
    valor++; 
    
  }
  return somar(valor, valor2)
}
console.log(somar(valor, valor2))
