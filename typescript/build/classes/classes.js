"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome} criada com sucesso`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log(`Pedido pronto para entrega: ${pedido}`);
        });
        return `Pedido na mesa: ${mesa}`;
    }
}
const loja1 = new Loja("Loja legal", "Loja de roupas");
loja1.criarLoja();
loja1.emitirPedido(10, "Hamburguer", "Refrigerante", "Batata");
