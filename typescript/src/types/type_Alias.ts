// TYPE ALIAS => Criar tipos com mais informações do que os primitivos

// Nas funções abaixo, ambas recebem o uuid como argumento com a mesma tipagem e isso pode tornar-se repetitivo ao longo do desenvolvimento.

// function acessar(uuid:string | number | null, nome: string){
//     console.log(`ID:${uuid} - Bem vindo ${nome}`)  
// }

// function logUsuario(uuid:string | number | null){
//     console.log(`Conta referente ao UUID: ${uuid}`)  
// }

// Para solucionar esse problema temos o TYPE ALIAS:

type Uuid = string | number | null;

function acessar(uuid:Uuid, nome: string){
    console.log(`ID:${uuid} - Bem vindo ${nome}`)  
}

function logUsuario(uuid:Uuid){
    console.log(`Conta referente ao UUID: ${uuid}`)  
}

// Outro exemplo

type Moedas = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moedas){
    console.log(`Comprando com a moeda: ${moeda}`)  
}