const entrada = require('readline-sync');

let soma = 0;


const prodCiclos = entrada.questionInt("solicite a quantidade de produtos que sao produzidos por ciclo:");

for (let i = 1; i <=12; i++) {
    const producoes = i * prodCiclos;
    console.log(`ciclo ${i}: ${producoes} producoes acumuladas`);
};