// This é variavel ao escopo no JavaScript
// This é lexico ou seja

// ele vai ser criado no momemento que aquela função for criada
// vai pertencer a esse escopo a qual a função foi definida
// Quando existem função normal o this varia (de acordo com quem chama a função)
// Em Arrow functions o  THIS é fixo


// THIS em função bind
const obj = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao); //referencia o atributo(este atributo) desse objeto seria o mesmo q fazer obj.saudacao
    }
}
obj.falar();

//  Função bind é utilizada para passar um objeto que se deseja ser "resolvido" o this
// utilizado para "amarrar" um determinado objeto, dono da execução de um metodo expecifico
//QUando passar para uma deteminada função, sempre que for referenciado o this, ele será o que foi passado no bind
/**
 * MDN EXPLICACAO
  método bind() cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido,
   com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
 */
// ex:
const falarBomDia = obj.falar;
falarBomDia()
const darBomDia = obj.falar.bind(obj);
darBomDia(); //Bind gera uma nova função
