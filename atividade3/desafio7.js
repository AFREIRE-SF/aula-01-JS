const frutas = new Map();
frutas.set('maçã', 2.50);
frutas.set('banana', 1.80);
frutas.set('pêra', 3.00);
frutas.set('uva', 2.50);

const macaMaisCaraQueBanana = frutas.get('maçã') > frutas.get('banana');

const peraNaoIgualUva = frutas.get('pêra') !== frutas.get('uva');

console.log(`A maçã é mais cara que a banana: ${macaMaisCaraQueBanana}`);
console.log(`A pêra não custa o mesmo que a uva: ${peraNaoIgualUva}`);
