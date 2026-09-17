const entrada = require('readline-sync');

const qtdPorHora = entrada.questionInt('digite a quantidade de pecas produzidade por hora');

const horasTurno = entrada.questionInt('digite a quantidade de horas trabaçhadas');

const prodtotal = qtdPorHora * horasTurno;

console.log(' \n=== A PRODUCAO TOTAL ===')
console.log(`Pecas produzidas por hora ${qtdPorHora}`);
console.log(`Horas do turno: ${horasTurno}`);
console.log(`Total produzido: ${prodtotal} pecas`);