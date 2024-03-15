// ARRAY EM INTERFACES

interface TecnologiaProps{
    id:number;
    nome:string;
    descricao?:string;
}

interface NomeProps{
    tecnologia: TecnologiaProps[]
}

let frontend:NomeProps ={
    tecnologia:[
        {id: 12, nome: "ReactJS", descricao: "Biblioteca para criar interfaces"},
        {id: 23, nome: "Javascript"},
        {id: 12, nome: "VueJS"}
    ]
}

console.log(frontend.tecnologia)