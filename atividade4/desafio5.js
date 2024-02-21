function verificaAnoBissexto(ano){
    if ((ano % 4 ===0 && ano % 100 !==0) || ano % 400 ===0){
        console.log("Ano Bissexto")
    }

}

verificaAnoBissexto(2000)
verificaAnoBissexto(1996)