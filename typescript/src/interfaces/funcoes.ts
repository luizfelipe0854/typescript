// FUNÇÕES EM UMA INTERFACE

interface CursoProps{
    id: number;
    nome: string;
    preco: number;
//AO PASSAR UMA FUNÇÃO EM UMA INTERFACE VOCE DEVE PASSAR OS ARGUMENTOS E O RETORNO ESPERADO POR ELA 
    promocao: (preco:number) => void; //A FUNCAO DEVE RECEBER UM ARGUMENTO NUMERICO E NÃO RETORNA NADA(VOID)  
}

const cursoLuiz:CursoProps = {
    id: 1,
    nome: "Curso do Luiz",
    preco: 250,
    promocao: (preco:number):void =>{// RECEBENDO ARGUMENTO NUMERICO E RETONANDO NADA(VOID)
        console.log(`O preço do curso é ${preco}`)
    }
}

// TAMBEM É POSSIVEL PASSAR UMA FUNÇÃO JÁ EXISTENTE

function desconto10reais(preco:number):void{
    console.log(`O preço com o desconto de 10 reais é ${preco-10}`)
}

const cursoPromocao:CursoProps = {
    id: 2,
    nome: "Curso em Promoção",
    preco: 550,
    promocao: desconto10reais
}

console.log(cursoPromocao.promocao(520))

// É POSSIVEL TAMBEM FAZER UMA INTERFACE PARA DEFINIR UMA FUNÇÃO

interface FuncaoSoma{
    (numero1:number, numero2:number):number
}

const somaNumeros:FuncaoSoma = (numero1:number, numero2:number):number=>{
    console.log(`A SOMA É ${numero1 + numero2}`)
    return numero1 + numero2
}