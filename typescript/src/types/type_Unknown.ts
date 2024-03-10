// TYPE UNKNOWN => tipo desconhecido, não se sabe o valor que vai ser recebido

let idPedido:any = 123 //pode ser atribuido a qualquer variavel
let totalPedido:unknown = 15 // só pode ser atribuido a variaveis do tipo ANY e UNKNOWN

let entregador:number = idPedido //valido pois a variavel do tipo any pode ser atribuida a uma no tipo number

// let totalEntrega:number = totalPedido // invalido pois variaveis do tipo unknown só podem ser atribuidas a ANY e a UNKNOWN
let totalEntrega:unknown = totalPedido