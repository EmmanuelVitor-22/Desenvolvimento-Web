console.log("For usando VAR");
for (var index = 0; index < 10; index++) {
  console.log(index);
}
console.log(index); // representa o valor que faz sair do laço

console.log("");

console.log(" For usando LET");

for(let n=0; n<10; n++){
  console.log(`passou ${n}`);
}
console.log(n); // está fora do escopo