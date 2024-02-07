const aluno = {
    nome: "Maria",
    nota1: 8,
    nota2: 7,
};

const media = (aluno.nota1 + aluno.nota2) / 2;

const aprovado = media >= 7;

console.log(`Nome: ${aluno.nome}`);
console.log(`Nota 1: ${aluno.nota1}`);
console.log(`Nota 2: ${aluno.nota2}`);
console.log(`Média: ${media}`);
console.log(`Aprovado: ${aprovado}`);
