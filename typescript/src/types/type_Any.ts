// TYPE ANY => Define que a variavel pode receber qualquer tipo.

let precoProduto; //Quando o tipo não é definido manualmente ou através do type inference a variavel é do tipo ANY.

precoProduto = true;
precoProduto = 1;
precoProduto = "Luiz";
precoProduto = null;

// O type ANY não é recomendado pois tira o principal foco do Typescript que é a tipagem forte