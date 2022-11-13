// Estudar sobre os parametros e retornos são opcionais 

function calcArea(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(` avalor acima do permitido: ${area}m2`)
    }
    else {
        return `a area é ${area}`
    }
}
// podem ser passado parametros ou não, 
console.log(calcArea(2, 2))
console.log(calcArea(2))
console.log(calcArea())
console.log(calcArea(2, 4, 5, 6)); // nesse caso so os que correspondem a assinatura da função são utilizados
console.log(calcArea(6, 6))