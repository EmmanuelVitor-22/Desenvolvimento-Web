//Call e Apply São formas diferentes de chamar uma uma função
// A diferença do call e apply está na forma que são passados os parametros
// na hora de invocar os dois metodos

// SITE PARA TIRAR DUVIDAS SOBRE CALL, APPLY E BIND : https://imasters.com.br/javascript/descomplicando-call-apply-e-bind-em-javascript
//EXEMPLO PRATICO
function getPreco(imposto = 0, moedaSimbolo = 'R$') {
    return `${moedaSimbolo} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}// função que será usada como metodo 
const produto = {
    nome: 'notebook',
    preco: 2000,
    desconto: 0.1,
    getPreco
}
console.log(getPreco()); // assim não recebe nada, pois o THIS nesse caso não está global e sim no escopo da função

// caso fosse feito da maneira abaixo seria possivel, pois o this estaria global
global.preco = 2000;
global.desconto = 0.1;
console.log(getPreco());

// puxando getPreco a partir de um OBJETO tbm funcionaria
console.log(produto.getPreco());
console.log();

console.log(" USANDO CALL");
/** USANDO CALL
 * Quando chama a função CALL é passado diretamente nos parametros dela cada um dos parametros
 * que serão usados nela, o primeiro parametro é o CONTEXTO (pode estar nulo), onde este pode ser
 * o global, o objeto que está sendo usado, e os outros parametros são os que serão passados para a função que está sendo executada
 */
//Sintaxe do .call() -> method.call(context, arguments);
console.log(`Usando .call ${getPreco.call(produto)}`);
console.log(`Passando os parametros diretamente no .call ${getPreco.call(produto, 0.2, 'US$')}`);// Passando os parametos diretamente dentro do call
console.log();

console.log(" USANDO APPLY");
/** USANDO APPLY
 * Quando chama a função APPLY os parametros são passados dentro de um array
 * que serão usados nela, o primeiro parametro é o CONTEXTO (pode estar nulo), onde este pode ser
 * o global, o objeto que está sendo usado,
 * e depois é passado um array com os outros parametros serão passados para a função que está sendo executada
 */
////Sintaxe do .apply() ->  method.apply(context, [arguments]);
console.log(`Usando .apply ${getPreco.apply(produto)}`);
console.log(`Passando os parametros diretamente no .apply ${getPreco.apply(produto, [0.3, '€'])} `);