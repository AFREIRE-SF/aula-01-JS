const dicionarioDeSinonimos = {
    feliz: ["alegre", "contente", "satisfeito"],
    triste: ["melancólico", "abatido", "deprimido"],
    bom: ["ótimo", "excelente", "maravilhoso"],
};

const obterSinonimos = (palavra) => {
    const sinonimos = dicionarioDeSinonimos[palavra.toLowerCase()] || [];
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