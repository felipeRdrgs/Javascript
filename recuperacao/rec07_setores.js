const entrada = require('readline-sync');

const cadastro = [];

for (let i = 1; i <= 6; i++) {
    const setor = entrada.question(`Digite o nome do setor ${i}: `);
    cadastro.push(setor);
}

for (let i = 0; i < cadastro.length; i++) {
    console.log(`${i + 1} - ${cadastro[i]}`);
}