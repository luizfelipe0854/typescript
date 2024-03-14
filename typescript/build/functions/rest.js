"use strict";
function totalVendas(venda1, venda2, venda3, venda4) {
    const total = venda1 + venda2 + venda3 + venda4;
    return total;
}
function allVendas(...vendas) {
    const qntVendas = vendas.length;
    vendas.map((venda) => {
        console.log(venda);
    });
    console.log(`Você fez ${qntVendas} vendas`);
}
