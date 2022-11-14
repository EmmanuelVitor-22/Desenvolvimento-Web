// Formas de criar objetos e JavaScript

// Dinâmica Função construtora Direct

const pessoa = new Object();
pessoa.nome = 'Emma';
console.log(pessoa.nome);
pessoa.idade = 21;
pessoa.ano = 1998

//deletando um atributo (quase nunca usado)
delete pessoa.ano

// Notacao Literal

const produto = {
    nome: "carro 1",
    preco: 12000,
    velocidadeMaxima: 300,
    motor: {
        marca: "honda",
        cilindrada: 10
    },//objtos podem conter outros objetos
    acelerar(valor) {
        let velocidade = 10
        return velocidade += valor;
    }//metodo
}
console.log(produto.acelerar(20));

// pode fazer um array que recebe um objeto

let arrDeObj = [];
arrDeObj.push({ nome: 'ana', idade: 19 });
arrDeObj.push({ nome: 'DUDA', idade: 19 });

function criaPessoa(nome, idade) {
    return {
        nome,
        idade,
    }
}
console.log(criaPessoa('Lucas', 22));
console.log(criaPessoa('Paul', 22));

let recebePessoaCriada = (criaPessoa) => {
    return arrDeObj.push(criaPessoa)
}
console.log(recebePessoaCriada());

// Funções Construtoras (Criando a propria )
function Construtora(nome, valor, desconto) {
    // niveis de visibilidade
    // publico (quando passo o parametro ou não uso o THIS no atributo)
    nome = nome,
        // Privado, quando uso this no atributo
        this.valor = valor,
        this.getDesconto = () => (valor * (1 - desconto))
}
const obj1 = new Construtora('lapis', 8, 0.10);
const obj2 = new Construtora('Caneta', 10, 0.20);
console.log(obj1.getDesconto());
console.log(obj2.getDesconto());

// Criar obj atavés de função factory

function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas);
        }
    }
}
const funcionario1 = criarFuncionario('juca', 1200, 4);
const funcionario2 = criarFuncionario('ana', 3000, 4);
console.log(funcionario1.getSalario());
console.log(funcionario2.getSalario());