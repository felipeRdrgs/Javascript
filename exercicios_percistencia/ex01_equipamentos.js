const fs = require('fs');

const equipamentos = [
  { codigo: 1,
    nome: "Notebook",
    setor: "TI",
    operacional: true},

  { codigo: 2,
    nome: "Impressora",
    setor: "Administração",
    operacional: true},

  { codigo: 3,
    nome: "Telefone",
    setor: "Vendas",
    operacional: false}

];
const equipamentosJSON = JSON.stringify(equipamentos, null, 2);

fs.writeFileSync('equipamentos.json', equipamentosJSON);
console.log(`Dados salvos com sucesso! ${equipamentos.length} equipamentos registrados.`);
