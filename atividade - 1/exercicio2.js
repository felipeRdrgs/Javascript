const entrada = require('readline-sync');

const nomeMaterial = entrada.question('Digite o nome do material: ');
const qtdAdquirida = entrada.questionInt('Digite a quantidade adquirida: ');
const precoUnidade = entrada.questionFloat('Digite o preço unitário: ');

const precoTotal = qtdAdquirida * precoUnidade;

console.log(' \n=== DETALHES DA COMPRA ===');
console.log(`Material: ${nomeMaterial}`);
console.log(`Quantidade adquirida: ${qtdAdquirida}`);
console.log(`Preco unitario: R$ ${precoUnidade.toFixed(2)}`);
console.log(`Preco total: R$ ${precoTotal.toFixed(2)}`);
