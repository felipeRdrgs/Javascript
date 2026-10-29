const entrada = require('readline-sync');
const funcoes = require('./funcoesOrcamento');

const nomeCliente = entrada.question('Digite o nome do cliente: ');
const valorMateriais = entrada.questionFloat('Digite o valor dos materiais: ');
const horas = entrada.questionFloat('Digite a quantidade de horas de serviço: ');

const maoDeObra = funcoes.calcularMaoDeObra(horas);
const total = funcoes.calcularTotal(valorMateriais, horas);
const situacaoDesconto = funcoes.verificarDesconto(total);

console.log('\n--- Relatório do Orçamento ---');
console.log(`Cliente: ${nomeCliente}`);
console.log(`Valor dos Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mão de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situação do Desconto: ${situacaoDesconto}`);