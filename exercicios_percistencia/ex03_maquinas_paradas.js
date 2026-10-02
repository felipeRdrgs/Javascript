const fs = require('fs');

const dados = JSON.parse(fs.readFileSync('Equipamentos.json', 'utf8'));

let totalParadas = 0;

console.log('=== EQUIPAMENTOS PARADOS ===');

dados.forEach((equipamento) => {
    if (equipamento.operacional === false) {
        console.log(equipamento);
        totalParadas++;
    }
});

console.log(`\nTotal de equipamentos parados: ${totalParadas}`);
