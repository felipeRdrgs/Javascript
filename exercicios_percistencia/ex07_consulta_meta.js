const fs = require("fs");

const dados = fs.readFileSync("producao.json", "utf8");
const maquinas = JSON.parse(dados);

let maquinasMeta = 0;

for (let maquina of maquinas) {
    let percentual = (maquina.produzido / maquina.meta) * 100;

    let classificacao;

    if (percentual >= 100) {
        classificacao = "META ATINGIDA";
        maquinasMeta++;
    } else if (percentual >= 80) {
        classificacao = "ATENÇÃO";
    } else {
        classificacao = "ABAIXO DA META";
    }

    console.log(
        `${maquina.maquina}: ${percentual.toFixed(2)}% - ${classificacao}`
    );
}

console.log(`\nMáquinas que atingiram a meta: ${maquinasMeta}`);