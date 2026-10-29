const entrada = require('readline-sync');

const nivelOleo = entrada.questionInt("digite o nivel de oleo em porcentagem(%):");

if (nivelOleo >= 40 && nivelOleo <= 80) {
    console.log(`NIVEL NORMAL.\n Valor: ${nivelOleo}`);
} else {
    console.log(`INSPECAO NECESSARIA.\n Valor: ${nivelOleo}`);
}