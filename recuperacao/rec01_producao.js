const entrada = require('readline-sync');

const CaixasHora = entrada.questionInt("digite a quantidade de caixas produzidas por hora:");
const horas = entrada.questionInt("informe a quantidade de horas trabalhadas:");

const valorTotal = horas * CaixasHora

console.log(`\n Caixas por hora: ${CaixasHora}\n Horas trabalhadas: ${horas}\n Total produzido: ${valorTotal}`)