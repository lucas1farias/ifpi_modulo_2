"use strict";
/*
    7. Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template strings e os valores
    "Ely, 120.56 e TypeScript" venham de variáveis declaradas separadamente e “interpoladas” na string:
    
    Ely
    My payment time is 120.56
    and
    my preffered language is TypeScript
*/
const pessoa = "Ely";
const pagamento = 120.56;
const linguagem = "TypeScript";
const msg = `
${pessoa}
My payment time is ${pagamento}
and
my preferred language is ${linguagem}
`;
console.log(msg);
