const pilotos = ["vettel", "alonsso", "Massa", "bronki"];

pilotos.pop(); //remove o ultimo elemento do array
console.log();
console.log("Tabela usando: POP ");
console.table(pilotos);

pilotos.push("lukki"); //adiciona um elemento no final do array
console.log();
console.log("Tabela usando: PUSH");
console.table(pilotos);

pilotos.shift(); //remove o primeiro elemento do array
console.log();
console.log("Tabela usando: SHIFT");
console.table(pilotos);

pilotos.unshift("Gabris"); //adiciona elemento na primeira posição do array
console.log();
console.log("Tabela usando: UNSHIFT");
console.table(pilotos);

// Splice adiciona e remove elementos


pilotos.splice(3, 0, "Emma", 'gabregas', "forcas", "duelos"); //adicionar elemento usando splice
console.log();
console.log("Tabela usando: SPLICE PARA ADICIONAR ELEMENENTO");
console.table(pilotos);

pilotos.splice(4, 1); //adicionar elemento usando splice
console.log();
console.log("Tabela usando: SPLICE PARA REMOVER (um) ELEMENENTO");
console.table(pilotos);

// METODOS QUE GERAM NOVO ARRAY

const newPilotos = pilotos.slice(2); // retorna um novo array a partir do elemnto passado
console.log();
console.log("Tabela usando: SLICE PARA GERAR (um novo) ARRAY");
console.table(newPilotos);


// retorna um novo array a partir da fatia delimitada
// intervalo aberto no ultimo, ou seja (no exemplo vai de 1 a 3) 4 não entra
const newPilotos2 = pilotos.slice(1, 4);
console.log();
console.log("Tabela usando: SLICE PARA GERAR (um novo) ARRAY a ppartir de uma fatia do outro");
console.table(newPilotos2);