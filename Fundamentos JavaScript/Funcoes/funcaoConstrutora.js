
function Carro(velocidadeMax = 200, delta = 5) {
    // ATRIBUTO PRIVADO
    let velocidadeAtual = 0;

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMax;
        }
    }
    // metodo publico para pegar a velocidade
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }

}
const uno = new Carro; //instanciando um novo objeto
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const lamborgini = new Carro(350, 20); // instancia passando valores do construtor
lamborgini.acelerar();
console.log(lamborgini.getVelocidadeAtual());