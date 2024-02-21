function verificaNota(numero){
    if (numero >=90){
        console.log("Aprovado com mérito")
    }
    else if (numero >=70 && numero <90){
        console.log("Aprovado")
    }
    else if (numero <70){
        console.log("Reprovado")
    }
}
    

verificaNota(95)
verificaNota(39)
verificaNota(-5)
verificaNota(0)
verificaNota(70)
