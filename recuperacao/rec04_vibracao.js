const entrada = require('readline-sync');

const nivel = entrada.questionInt("digite o nivel de vibração em (mm/s):");
 
if (nivel <= 3 ) {
    console.log(`ESTAVEL.\n Nivel: ${nivel}`)
 } if (nivel > 3 && nivel <6) {
    console.log(`ATENCAO.\n Nivel: ${nivel}`)
 } else if (nivel > 6) {
    console.log(`SITUACAO CRITICA.\n Nivel: ${nivel}`)
 }