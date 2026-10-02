const fs = require('fs');

if (fs.existsSync('equipamentos.json')) {
    const equipamentosJSON = fs.readFileSync('equipamentos.json', 'utf-8');
    const equipamentos = JSON.parse(equipamentosJSON);

    const maquinasParadas = equipamentos.filter(equipamento => !equipamento.operacional);

    console.log('Equipamentos Parados:');
    maquinasParadas.forEach(equipamento => {
        console.log(`Código: ${equipamento.codigo}`);
        console.log(`Equipamento: ${equipamento.nome}`);
        console.log(`Setor: ${equipamento.setor}`);
        console.log(`Status: ${equipamento.operacional ? 'OPERACIONAL' : 'PARADA'}`);
        console.log('-------------------');
    });
    console.log(`Total de equipamentos parados: ${maquinasParadas.length}`);
} else {
    console.log('Arquivo equipamentos.json não encontrado.');
}
