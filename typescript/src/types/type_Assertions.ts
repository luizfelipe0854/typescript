// TYPE ASSERTIONS => Serve para afirmar algum tipo

let statusAtual:unknown = 1 // statusAtual é do tipo unknown mas tem o valor 1 (number)

let mudaStatus:number = 0

mudaStatus = statusAtual as number //Afirmando que o valor de statusAtual é do tipo number 

// Outra maneira de afirmar o tipo
mudaStatus = <number>statusAtual