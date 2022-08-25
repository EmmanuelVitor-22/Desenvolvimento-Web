

function randomico([min=1, max=10]) {
    if ([min>max]) {
        //se o minimo for maior que o maximo inverta as posições
        [min, max] = [max, min]
         const valor  =  Math.random() * (max-min)+min
         return Math.floor(valor);
        }
}

// Pasando os dois valores
console.log(randomico([12,50]));
// Pasando os um valor 
console.log(randomico([10]));
// Pasando somente o segundo
console.log(randomico([,50]));
// Pasando vazio, recebe o valor default
console.log(randomico([]));
// Pasando nada, erro
console.log(randomico());