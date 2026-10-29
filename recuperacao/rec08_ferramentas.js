const entrada = require('readline-sync');

let ferramentas = [];

for (let i = 1; i <= 4; i++) {
     const objeto = entrada.question(`digite o nome do objeto: `);
        const qtd = entrada.questionInt(`digite a quantidade do objeto: `);
        const minimo = entrada.questionInt(`digite a quantidade minima do objeto: `);
    ferramentas.push({ nome: objeto, quantidade: qtd, minimo: minimo });
}

console.log(`\n Situação das ferramentas:`);
for (let i = 0; i < ferramentas.length; i++) {
    const ferramenta = ferramentas[i];
    if (ferramenta.quantidade < ferramenta.minimo) {
        console.log(`${ferramenta.nome} - Quantidade: ${ferramenta.quantidade} - Mínimo: ${ferramenta.minimo} - Situação: REPOR`);
    } else {
        console.log(`${ferramenta.nome} - Quantidade: ${ferramenta.quantidade} - Mínimo: ${ferramenta.minimo} - Situação: ESTOQUE SUFICIENTE`);
    }
}