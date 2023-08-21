

// noImplicitAny

/*
  A configuração parece se aplicar somente a casos de parâmetros
  O parâmetro "valor" é apontado como inválido, pois "any" está sendo inferido
*/

// function digitarNumero(valor) {
//     return `Você digitou ${valor}`
// }

// Porém, em casos de instanciação comum, não parece haver essa exigência
let usuario = {}
console.log()

let dia = "um"
