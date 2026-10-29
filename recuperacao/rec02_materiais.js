const entrada = require('readline-sync');

const peca = entrada.question("informe o nome da peca:");
const qtd = entrada.questionInt("informe a quantidade comprada:");
const preco = entrada.questionFloat("digite o preco unitario:");

valorTotal = qtd * preco 

console.log(`\n Nome da peca: ${peca}\n Quantidade: ${qtd}\n Preco: ${preco}\n Valor total: ${valorTotal}`)
