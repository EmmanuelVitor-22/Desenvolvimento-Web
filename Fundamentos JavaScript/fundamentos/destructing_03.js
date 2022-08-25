
// Destructingo como parametro de uma função

// os parametros são passados dentro de um operador destructing
function randomico({min = 0, max=100}){
    const valorRand = Math.random() * (max-min)+min;
    return Math.floor(valorRand);
}    


    setInterval(() => {
        const obj = {min:15, max:100}
        console.log(randomico(obj))
        }, 1000); 


        //possivei passada de parametro
        //passando só um doas vlores
        console.log(randomico({min:900}));
        //passando vazio, onde ele faz a validação apenas entre o minimo e o maximo padrão
        console.log(randomico({}));
        // não passando nada (gerando um erro)
        console.log(randomico());
