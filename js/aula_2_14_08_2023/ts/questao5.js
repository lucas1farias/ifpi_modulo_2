"use strict";
/*
  5. Pesquise e, se encontrar, um exemplo onde o tipo any seria benéfico.
*/
// Vamos supor que alguém queira obter uma data e sabe que existe uma classe JS para isso
const hoje = new Date();
/*
    Se a pessoa não conhece um objeto "Date", pode pensar que a função abaixo retorna uma string
    Na verdade, a função retorna um número inteiro
    Na dúvida, pode se optar por tipar como "any"
*/
const mesAtual = hoje.getMonth();
console.log(mesAtual);
