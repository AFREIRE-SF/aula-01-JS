const vetor1 = [2, 3, 4];
const vetor2 = [1, 5, 2]; 

if (vetor1.length === vetor2.length) {
    const produtoEscalar = vetor1.reduce((total, valor, index) => total + valor * vetor2[index], 0);

    console.log("Vetor x:", vetor1);
    console.log("Vetor y:", vetor2);
    console.log("Produto Escalar:", produtoEscalar);
} else {
    console.log("Os vetores devem ter o mesmo comprimento para calcular o produto escalar.");
}
