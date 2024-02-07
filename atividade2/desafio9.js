const notas = [8, 9, 7, 5, 10, 6];

const notasOrdenadas = notas.slice().sort((a, b) => a - b);

const notasSemExtremos = notasOrdenadas.slice(1, -1);

const media = notasSemExtremos.reduce((total, nota) => total + nota, 0) / notasSemExtremos.length;

console.log("Notas:", notas);
console.log("Média aritmética (desconsiderando a nota mais baixa e a mais alta):", media);
