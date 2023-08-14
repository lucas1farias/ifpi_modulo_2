/*
    9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e valorDebitos. Crie um método
    chamado saldo() que retorna/calcula a diferença entre crédito e débito. Instancie uma classe
    SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método saldo().
*/
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var cliente = new SituacaoFinanceira();
cliente.valorCreditos = 100;
cliente.valorDebitos = 70;
console.log(cliente.saldo());
