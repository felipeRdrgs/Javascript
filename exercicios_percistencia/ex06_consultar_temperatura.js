const fs = require("fs");

try {
    const dados = fs.readFileSync("temperaturas.json", "utf8");
    const temperaturas = JSON.parse(dados);

for (let temperatura of temperaturas.temperaturas) {
    if (temperatura > 350) {
        throw new Error(`Temperatura acima do limite operacional: ${temperatura} °C`);
        }
        console.log(`Temperatura ${temperatura} °C: NORMAL`);
    }

} catch (erro) {
    console.log("ERRO:", erro.message);
}