const entrada = require('readline-sync');

let soma = 0 

for (let i = 1; i <= 5; i++) {
    soma += entrada.questionFloat(`digite o valor da medicao ${i}:`);
}
const media = soma / 5
console.log(`soma ${soma}`);
console.log(`media ${media.toFixed(2)}`);

