const matriz = [
    [2, 3],
    [4, 5],
];

if (matriz.length === 2 && matriz[0].length === 2 && matriz[1].length === 2) {
    const determinante = (matriz[0][0] * matriz[1][1]) - (matriz[0][1] * matriz[1][0]);

    console.log("Matriz:");
    matriz.forEach(row => console.log(row.join(' ')));
    console.log("Determinante:", determinante);
} else {
    console.log("A matriz não é 2x2. Por favor, ajuste os valores da matriz.");
}
