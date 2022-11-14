// Sobre ARROW FUNCTIONS e THIS

// o this na arrow function não muda de acordo com o contexto
// com as funções arrow tem vantagens de serem mais curtas, 
// possivilitam fazer funções mais expecificas

//formato padrão
const dobro = function (n) {
    return 2 * n;
}
console.log(dobro(2))

// com ARROW Function

const dobro2 = n => 2 * n; // retono inplicito e com um parametro
console.log(dobro2(5))

const saudar = (nome, saudacao) => {
    return `${nome} ${saudacao}`
}
console.log(saudar('ana', 'bom dia'));

// Criando um objeto a partir de uma arrow(explicito)

const criaObj = () => {
    return {
        nome: 'Juna',
        idade: 23
    }
}
// Criando um objeto a partir de uma arrow(implicito)

const novoObj = () => (
    {
        nome: 'Pessoa2',
        idade: 32
    }
)