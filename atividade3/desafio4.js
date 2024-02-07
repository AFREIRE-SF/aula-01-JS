const dicionarioDeSinonimos = new Map();

dicionarioDeSinonimos.set('feliz', ["alegre", "contente", "satisfeito"]);
dicionarioDeSinonimos.set('triste', ["melancólico", "abatido", "deprimido"]);
dicionarioDeSinonimos.set('bom', ["ótimo", "excelente", "maravilhoso"]);

const obterSinonimos = (palavra) => {
    const sinonimos = dicionarioDeSinonimos.get(palavra.toLowerCase()) || [];
    if (sinonimos.length === 0) {
        console.log(`Não foram encontrados sinônimos para "${palavra}".`);
    } else {
        console.log(`Sinônimos para "${palavra}": ${sinonimos.join(", ")}.`);
    }
};

obterSinonimos('feliz');
obterSinonimos('triste');
obterSinonimos('bom');
obterSinonimos('alegre'); // Exemplo de palavra não encontrada

