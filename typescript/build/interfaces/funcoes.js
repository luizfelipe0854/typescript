"use strict";
const cursoLuiz = {
    id: 1,
    nome: "Curso do Luiz",
    preco: 250,
    promocao: (preco) => {
        console.log(`O preço do curso é ${preco}`);
    }
};
function desconto10reais(preco) {
    console.log(`O preço com o desconto de 10 reais é ${preco - 10}`);
}
const cursoPromocao = {
    id: 2,
    nome: "Curso em Promoção",
    preco: 550,
    promocao: desconto10reais
};
console.log(cursoPromocao.promocao(520));
const somaNumeros = (numero1, numero2) => {
    console.log(`A SOMA É ${numero1 + numero2}`);
    return numero1 + numero2;
};
