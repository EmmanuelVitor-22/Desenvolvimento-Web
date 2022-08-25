
// destructing é uma expressão que possibilitar tirextrair dados de dento de um objeto ou array
// "transformando", assim,  em variaveis 
// Destructingo com objetos

const objPessoa = {
    id: 1,
    nome: 'Angel', 
    endereco: {
        logradouro: "Rua São Miguel",
        numero:12,
        cep: '44.230-000'
    }
}

const objPessoa2 = {
    id: 2,
    nome: 'Rai', 
    endereco: {
        logradouro: "Rua São Miguel",
        numero:13,
        cep: '44.230-000'
    }
}
const { id, nome} = objPessoa;
 // isso é igual a fazer id.objeto_pessoa e nome.objeto_pessoa
console.log(id, nome); 

// dando apelidos ou novos nomes as variavei
const {id:newId, endereco:end} = objPessoa2;
console.log(newId, end);

// criando uma variavel direto na destruct
 const { idade, sobrenome = "Silva"} = objPessoa;
 console.log(idade, sobrenome);