// TYPE INFERENCE => tipagem dinamica, o TS define o tipo da variavel de acordo com o valor que ela recebe.

let curso = "Typescript"  //O TS define que o tipo da variavel curso é "String" pois ela recebe uma String

let tecnologias = [ //O TS define que "tecnologias" é um array de Strings APENAS(ela não recebe nenhum outro tipo).
    "ReactJS",
    "Javascript",
    "Typescript"
]

let tecnologias2 = [ //O TS define que "tecnologias" é um array de Strings ou Numbers APENAS.
    "ReactJS",
    "Javascript",
    "Typescript",
    2024
]