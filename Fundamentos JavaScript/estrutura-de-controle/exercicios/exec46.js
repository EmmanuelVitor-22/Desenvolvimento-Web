let numero = 11;
let quociente=0;
let numeroAtualizado=0; 

    

while ((numero !== 0) &&(numero !==1)) {
    console.log(`Numero Inicial:${numero}`)    
    numeroAtualizado = numero-2;
    console.log(`Quociente:${numeroAtualizado}`)
    numero = numeroAtualizado;
    console.log(`Numero atual:${numero}`)
    quociente++;
    console.log(quociente)
}


// numero = 5                  numero = 3
// quociente = 5-2             quociente = 3-2
// quociente = 3               quociente = 1
// numero = quociente;         numero = quociente;
// numero = 3;                 numero = 1



