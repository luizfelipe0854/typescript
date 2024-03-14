// Deixar um valor default ou deixar ele opcional

function cadastro(email:string, senha:string, nome = "Visitante" , idade?:number):void{
    let data = {email,senha,nome,idade}

    console.log(data)
}

// o ? no parametro faz ele ser um parametro opcional(não é obrigatório passar um valor para ele)

// o "nome="visitante"" faz com que, caso não seja atribuido um valor a nome, o valor seja automaticamente
// definido como "Visitante"