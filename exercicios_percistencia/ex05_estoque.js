const fs = require("fs");

const dados = fs.readFileSync("materiais.json", "utf8");
const materiais = JSON.parse(dados);

let totalUnidades = 0;
let valorTotalEstoque = 0;

console.log(" ESTOQUE DE MATERIAIS ");

materiais.forEach((material) => {
    const valorEstoque = material.quantidade * material.valorUnitario;

    console.log(
        `${material.codigo} - ${material.descricao} - ` +
        `Quantidade: ${material.quantidade} - ` +
        `Valor unitário: R$ ${material.valorUnitario.toFixed(2)} - ` +
        `Valor total: R$ ${valorEstoque.toFixed(2)}`
    );

    totalUnidades += material.quantidade;
    valorTotalEstoque += valorEstoque;
});

console.log("\n=== RESUMO DO ESTOQUE ===");
console.log(`Tipos de materiais cadastrados: ${materiais.length}`);
console.log(`Quantidade total de unidades: ${totalUnidades}`);
console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
