const fs = require('fs');

const sensores = JSON.parse(
    fs.readFileSync('Monitoramento.json', 'utf8')
);

console.log('=== TODOS OS SENSORES ===');

sensores.forEach((sensor) => {
    console.log(sensor);
});

console.log('\n=== SENSORES EM ALERTA ===');

let totalAlertas = 0;

sensores.forEach((sensor) => {
    if (sensor.status === 'Alerta') {
        console.log(sensor);
        totalAlertas++;
    }
});

console.log(`\nTotal de sensores em alerta: ${totalAlertas}`);
