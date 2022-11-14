/*
Callback
Permite que você passe uma função para outra, sempre que um determinado evento for acionado
essa função vai ser disparada (chamada de volta);
Pode ser chamado mais de uma vez ou uma unica vez

*/

const fabricantes = ["mercedes", "audi", "corola"];

const callbackParaForEach = (indice, nome) => console.log(`${indice + 1} - ${nome}`);

fabricantes.forEach(callbackParaForEach)

setTimeout(() => console.log("Aparece depois de 3s"), 3000); //Exemplo de callback é o setTimeOut
