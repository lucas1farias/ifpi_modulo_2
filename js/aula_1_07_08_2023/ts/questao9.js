"use strict";
/*
    9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e valorDebitos. Crie um método
    chamado saldo() que retorna/calcula a diferença entre crédito e débito. Instancie uma classe
    SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método saldo().
*/
class SituacaoFinanceira {
    constructor() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
const cliente = new SituacaoFinanceira();
cliente.valorCreditos = 100;
cliente.valorDebitos = 70;
console.log(cliente.saldo());
