function verificarTriangulo(l1,l2,l3){
    if (l1 === l2 && l1 === l3) {
        console.log("Equilátero")
    }

    if ((l2 === l1 && l2 !== l3 && l1 !==l3 || 
        l2 !== l1 && l2 === l3 && l1 !==l3 || 
        l2 !== l1 && l2 !== l3 && l1 ===l3 )) {
        console.log("Isósceles")
    }

    if (l2 !== l1 && l2 !== l3 && l1 !==l3) {
        console.log("Escaleno")
    }

}

verificarTriangulo(3,3,3)

verificarTriangulo(3,36,88)

verificarTriangulo(3,3,8)
verificarTriangulo(3,8,8)
verificarTriangulo(3,8,3)

