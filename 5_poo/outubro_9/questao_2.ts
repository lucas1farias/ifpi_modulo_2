

/*
2. Crie uma classe Calculadora com:
a. Dois atributos privados chamados representando dois operandos;
b. Crie um construtor que inicializa os atributos;
c. Crie um método que retorna a soma dos dois atributos;
d. Teste a classe.
*/

export class Calculadora {
    private _operandoA: number
    private _operandoB: number

    constructor(operandoA: number, operandoB: number) {
        this._operandoA = operandoA
        this._operandoB = operandoB
    }

    somar(): number {
        return this._operandoA + this._operandoB
    }

    getPrimeiroOperando() {
        return this._operandoA
    }

    getSegundoOperando() {
        return this._operandoB
    }
}

function main() {
    const operacao: Calculadora = new Calculadora(2, 5)
    console.log(operacao.somar())
}

main()
