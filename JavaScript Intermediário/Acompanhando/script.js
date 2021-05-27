function criarAluno(name, n1, n2) {
   
    return {
        nome: name,
        nota1: n1,
        nota2: n2,
        media: function () {
             return (this.nota1 + this.nota2) / 2;
        }
    }
   
}

var aluno = criarAluno("Thalysson", 9, 10);
console.log(aluno)
console.log(aluno.nome + " - " + aluno.media());