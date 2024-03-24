// CLASSES => A classe é resposavel por armazenar as caracteristicas e ações que um objeto vai possuir
// em outras palavras é um conjunto de atributos e métodos 

class Loja {
    nome:string;
    categoria:string;

    constructor(nome:string, categoria:string){
        this.nome = nome;
        this.categoria = categoria
    }

    criarLoja(){
        console.log(`Loja ${this.nome} criada com sucesso`)
    }

    emitirPedido(mesa: number, ...pedidos:string[]): string{
        pedidos.map((pedido)=>{
            console.log(`Pedido pronto para entrega: ${pedido}`)
        })
        return `Pedido na mesa: ${mesa}`
    }
}


const loja1 = new Loja("Loja legal", "Loja de roupas")

loja1.criarLoja()

loja1.emitirPedido(10,"Hamburguer", "Refrigerante", "Batata")
