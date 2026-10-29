const entrada = require('readline-sync');

let acumulador = 0;

for (let i = 1; i<= 6; i++){
    const media = entrada.questionInt(`digite a ${i} media do aluno:`);
    acumulador += media;
}
const mediaFinal = acumulador / 6;
console.log(`\n A media final do aluno é: ${mediaFinal}`);