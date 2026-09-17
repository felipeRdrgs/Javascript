const entrada = require('readline-sync');

const pesoPeca = entrada.questionFloat('digite o peso da peca:');

if (pesoPeca >= 95 && pesoPeca <= 105) {
    console.log(`APROVADO`)

} else {
    console.log(`REPROVADO.`)
}
