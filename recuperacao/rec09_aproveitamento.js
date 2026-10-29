const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    util = util;
    total = total;
    const aproveitamento = (util / total) * 100;
    return aproveitamento;
};

function classificarAproveitamento(aproveitamento) {
    if (aproveitamento >= 90) {
        return "EXCELENTE";
    } else if (aproveitamento >= 75 && aproveitamento <= 89.99) {
        return "ADEQUADO";
    } else if (aproveitamento < 75) {
        return "REVISAR PROCESSO";
    }
}

const total = entrada.questionInt("Digite a quantidade total de peças produzidas: ");
const util = entrada.questionInt("Digite a quantidade útil de peças produzidas: ");

const aproveitamento = calcularAproveitamento(util, total);
const classificacao = classificarAproveitamento(aproveitamento);

console.log(`\nResultados:`);
console.log(`Quantidade Total: ${total}`);
console.log(`Quantidade Útil: ${util}`);
console.log(`Percentual de Aproveitamento: ${aproveitamento.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);