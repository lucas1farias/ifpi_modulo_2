

/* 1. Qual a diferença entre tipagem dinâmica e tipagem estática? */

/* Exemplo em JS (tipagem dinâmica)
  
  . Permite atribuir tipos sem explicitar isso na instanciação
  . Permite mudança de tipos arbitrariamente
  . Se há erros, eles só são evidenciados na execução, sem avisos durante a criação (compilação)
  . Reduz o código e o torna mais flexível

  let pessoa = "Mario"
  pessoa = true
*/

/* Exemplo de TS (tipagem estática)
  
  . É o inverso da tipagem dinâmica
  . Permite/obriga (casos como C, C++) atribuir tipos de forma explicita na instanciação
  . Não permite mudanças de tipos
  . OBS: como TS é híbrido, ele permite atribuir mais de um tipo se isso for configurado na instanciação
  . Erros são visto no momento da criação do código (compilação) com avisos antes de executar
  . Aumenta o código, mas pode torná-lo mais profissional, explicativo (se não há exagero/ausência de inferência)
*/

// Este exemplo mostra a tipagem estática em ação (Type 'boolean' is not assignable to type 'string'.)
let pessoa: string = "Mario"
pessoa = true

// Porém, se na instanciação fosse dado mais de uma opção de tipo, TypeScript aceita a abordagem
let individuo: string | boolean = "Alceu"
individuo = true;