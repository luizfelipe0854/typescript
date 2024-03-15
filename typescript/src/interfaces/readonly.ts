//  READONLY => torna uma propriedade acessivel apenas para leitura e nao para alteração

interface ProdutoProps{
    id: number;
    nome: string;
    preco: number;
}

interface ProdutoProps2{
    readonly id: number;
    nome: string;
    preco: number;
}

let Tenis:ProdutoProps={
    id: 1,
    nome: "Tenis legal",
    preco: 250
}

let Camiseta:ProdutoProps2={
    id: 2,
    nome: "Camiseta legal",
    preco:100
}

Tenis.id = 120; //Assim é possivel alterar a propriedade ID pois na primeira interface o ID não é READONLY 
// Camiseta.id= 120 //Assim é impossivel alterar a propriedade ID pois na segunda interface o ID é READONLY


