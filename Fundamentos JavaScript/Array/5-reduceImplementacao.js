// implementando versão propria de reduce (simplificada), 
// como funciona "por trás dos panos" (sem criar o valor inicial)

// Array.prototype.reduce2 = function (callback) {
//     let acumulador = this[0];
//     for (let i = 0; i < this.length; i++) {
//         acumulador = callback(acumulador, this[i], i, this)
//     }
//     return acumulador
// }

//  COM VALOR INICIAL
Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0];
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

// testando


let soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5];
console.log(nums.reduce2(soma, 15))