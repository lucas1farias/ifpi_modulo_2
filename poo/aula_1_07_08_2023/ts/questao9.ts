

/*
    9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e valorDebitos. Crie um método
    chamado saldo() que retorna/calcula a diferença entre crédito e débito. Instancie uma classe 
    SituacaoFinanceira, inicialize os dois atributos e exiba o resultado do método saldo().
*/

class SituacaoFinanceira {
    public valorCreditos: number = 0
    public valorDebitos: number = 0

    public saldo(): number {
        return this.valorCreditos - this.valorDebitos
    }
}

const cliente = new SituacaoFinanceira()
cliente.valorCreditos = 100
cliente.valorDebitos = 70
console.log(cliente.saldo())