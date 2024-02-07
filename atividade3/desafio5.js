const pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Rio de Janeiro",
};

const maiorDeIdade = pessoa.idade >= 18;

const naoSaoPaulo = pessoa.cidade.toLowerCase() !== "são paulo";

console.log(`Maior de idade: ${maiorDeIdade}`);
console.log(`Não é de São Paulo: ${naoSaoPaulo}`);
