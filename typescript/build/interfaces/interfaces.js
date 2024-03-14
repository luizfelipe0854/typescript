"use strict";
let loja;
loja = {
    nome: "Loja do Luiz",
    endereco: "rua 1",
    status: true
};
const loja2 = {
    nome: "LOJA LEGAL",
    endereco: "rua xxxx",
    status: false
};
function novaLoja({ nome, endereco, status }) {
    console.log(`Loja ${nome} criada com sucesso`);
    console.log(`Endereço da loja: ${endereco}`);
    console.log(`Status da loja: ${status}`);
    console.log("----------------------");
}
novaLoja({ nome: "Loja Teste", endereco: "rua x", status: true });
novaLoja({ nome: "Loja do Luiz", endereco: "rua ali", status: true });
