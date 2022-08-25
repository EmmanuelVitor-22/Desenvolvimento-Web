function mostrarNomeUppeerCase(pessoa) {
    try {//bloco q possivelmente pode dar um problema EX: requisições AJAX
        console.log(`meu nome é ${pessoas.toUpperCase()}!!!`)
    } catch (error) {// Bloco a ser executado caso haja um erro
        throw new Error("não passou")
    }finally{// bloco de codigo que será executado sempre, independente de ter dado erro ou não
        console.log("vamos em frente")
    }
}
var pessoa = 'ana'
mostrarNomeUppeerCase(pessoa);