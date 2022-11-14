
let salario = parseFloat(prompt("Digite o valor do seu salario"))
let emprestimo = parseFloat(prompt("Digite o valor do seu emprestimo"));
let numeroDeParcelasDaPrestacao = parseFloat(prompt("Digite o numero de parcelas"))

let limiteDeEmprestimo = salario*10;
let prestacao = emprestimo/numeroDeParcelasDaPrestacao;
let limiteDePrestacao = salario*0.3;


if ((emprestimo>0) && (emprestimo<=limiteDeEmprestimo)) {
    if (prestacao<=limiteDePrestacao) {
        console.log("emprestimo realizado com sucesso!!")
    }
}else{
    console.log("Não é possivel efetuar")
}


