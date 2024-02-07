const notas = [7.5, 8.0, 9.2];

const somaNotas = notas.reduce((total, nota) => total + nota, 0);
const media = somaNotas / notas.length;

console.log("Notas:", notas);
console.log("Média das notas:", media);
