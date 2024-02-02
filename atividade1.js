//resolução da atividade 01//
const idade = prompt("Digite a sua idade.")
const nacionalidade = prompt("Digite a sua nacionalidade.")

console.log(nacionalidade == "brasileira" && Number(idade) >= 16)

//resolução da atividade 02//
const salario = prompt("Digite o seu salário.")
const scoreDeCredito = prompt("Digite o seu score de crédito.")
const idade2 = prompt("Digite a sua idade.")

const verificaSalario = Number(salario) >= 5000
const verificaScoreDeCredito = Number(scoreDeCredito) >= 700
const verificaIdade = Number(idade2)>= 18

console.log(verificaSalario && verificaScoreDeCredito && verificaIdade)

// resolução da atividade o3//

const navegador = prompt("Digite o seu navegador.")
const sistemaOperacional = prompt("Qual o seu Sistema operacional?")

const verificaNavegador = navegador == "Chrome" || navegador == "Firefox"

const verificaSistemaOperacional = sistemaOperacional == "Windows" || sistemaOperacional == "Mac"

console.log(verificaNavegador && verificaSistemaOperacional)


//resolução da atividade 04//

const idade3 = prompt("Digite a sua idade")
const compraMinima = prompt("Digite o valor da compra")
const isNewClient = prompt("Você é um cliente novo?")

const verificaIdade3 = Number(idade3) >=60
const verificacompraMinima = Number(compraMinima)>=100

console.log (verificaIdade3 && verificacompraMinima && isNewClient)
