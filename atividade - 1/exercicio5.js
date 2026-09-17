const entrada = require("readline-sync");

const pecasCiclo = entrada.questionInt("digite a quantidade de pecas produzidas por ciclo:");

for (let ciclo = 1; ciclo <= 10; ciclo++) {
    const totalPecas = pecasCiclo * ciclo;
    console.log(`\nCICLO ${ciclo}: ${totalPecas} pecas acumuladas`);
    console.log(`Quantidade de peças produzidas: ${totalPecas}`);
}
