const listaDeCompras = new Map();

listaDeCompras.set('Maçã', 5);
listaDeCompras.set('Banana', 3);
listaDeCompras.set('Leite', 4);
listaDeCompras.set('Pão', 10);

const verificarItem = (item) => {
    if (listaDeCompras.has(item)) {
        console.log(`${item} está na lista de compras.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
};

verificarItem('Maçã');
verificarItem('Café');

const verificarQuantidade = (item) => {
    if (listaDeCompras.has(item)) {
        const quantidade = listaDeCompras.get(item);
        console.log(`A quantidade de ${item} na lista de compras é ${quantidade}.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
};

verificarQuantidade('Leite');
verificarQuantidade('Cenoura');

const modificarQuantidade = (item, novaQuantidade) => {
    if (listaDeCompras.has(item)) {
        listaDeCompras.set(item, novaQuantidade);
        console.log(`A quantidade de ${item} foi modificada para ${novaQuantidade}.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
};

modificarQuantidade('Banana', 5);

const removerItem = (item) => {
    if (listaDeCompras.has(item)) {
        listaDeCompras.delete(item);
        console.log(`${item} foi removido da lista de compras.`);
    } else {
        console.log(`${item} não está na lista de compras.`);
    }
};

removerItem('Pão');

console.log('Lista de compras atualizada:', listaDeCompras);
