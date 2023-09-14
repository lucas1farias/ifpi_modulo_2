

/* 
    7. Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template strings e os valores 
    "Ely, 120.56 e TypeScript" venham de variáveis declaradas separadamente e “interpoladas” na string:
    
    Ely
    My payment time is 120.56
    and
    my preffered language is TypeScript
*/

const pessoa: string = "Ely"
const pagamento: number = 120.56
const linguagem: string = "TypeScript"

const msg: string = `
${pessoa}
My payment time is ${pagamento}
and
my preferred language is ${linguagem}
`
console.log(msg)
