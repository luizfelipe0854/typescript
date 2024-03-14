//  INTERFACES => é um padrao de dados em um objeto que deve ser seguido

let loja:object 

loja = {
    nome: "Loja do Luiz",
    endereco: "rua 1",
    status: true
}

interface LojaProps { 
    nome:string;
    endereco:string;
    status:boolean;
}

// A INTERFACE SERVE PRA DESCREVER A ESTRUTURA DE UM OBJETO

const loja2: LojaProps ={
    nome: "LOJA LEGAL",
    endereco: "rua xxxx",
    status: false
}

// O tipo do objeto "loja2" é "LojaProps" então esse objeto deve conter os mesmos dados definidos na interface LojaProps.

// USANDO A INTERFACE EM UMA FUNÇÂO

function novaLoja({nome,endereco,status}:LojaProps){
    console.log(`Loja ${nome} criada com sucesso`)
    console.log(`Endereço da loja: ${endereco}`)
    console.log(`Status da loja: ${status}`)

    console.log("----------------------")
}

// Ao aplicar a inteface aos parametros da função, os parametros devem ser passados como um objeto conforme a INTERFACE define

novaLoja({nome: "Loja Teste", endereco:"rua x", status: true})

novaLoja({nome: "Loja do Luiz", endereco:"rua ali", status: true})
