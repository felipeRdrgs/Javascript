function calcularMaoDeObra(horas) {
    return horas * 95;
}

function calcularTotal(valorMateriais, horas) {
    total = valorMateriais + calcularMaoDeObra(horas);
    return total;
}

function verificarDesconto(total) {
    if (total >= 1000) {
        return "DESCONTO DE 10%";
    } else {
        return "SEM DESCONTO";
    }
}

module.exports = {
    calcularMaoDeObra,
    calcularTotal,
    verificarDesconto
};