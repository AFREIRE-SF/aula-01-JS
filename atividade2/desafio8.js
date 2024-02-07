const idades = [15, 22, 17, 20, 30, 12];

let indiceUltimoMaiorOuIgual18 = -1;

for (let i = idades.length - 1; i >= 0; i--) {
    if (idades[i] >= 18) {
        indiceUltimoMaiorOuIgual18 = i;
        break;
    }
}

console.log("Índice do último elemento maior ou igual a 18:", indiceUltimoMaiorOuIgual18);
