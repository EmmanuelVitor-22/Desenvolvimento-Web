
function verificaVerdadeiro(valor) {
    if (valor) { //faz um teste logico verdadeiro ou falso
        console.log(`${valor} is true`);// toda vez que for falso não irá imprimir
    }
}
verificaVerdadeiro(NaN);
verificaVerdadeiro(1);
verificaVerdadeiro('');
verificaVerdadeiro(2);
verificaVerdadeiro(null);
verificaVerdadeiro(3);
verificaVerdadeiro(undefined);
verificaVerdadeiro(4);
verificaVerdadeiro(false);
verificaVerdadeiro(5);
verificaVerdadeiro(0); 