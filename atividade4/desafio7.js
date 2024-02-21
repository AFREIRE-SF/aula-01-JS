
function verificaParOuImpar(numero){
    switch (numero % 2) {
        case 0:
            console.log(numero + " é par.");
            break;
        case 1:
        case -1:
            console.log(numero + " é ímpar.");
            break;
        default:
            console.log("O número inserido não é um número inteiro.");
    }
}

verificaParOuImpar(4)
verificaParOuImpar(5)
verificaParOuImpar(47)
verificaParOuImpar(40)