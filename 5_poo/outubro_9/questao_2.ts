

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

    getOperandoA(): number {
        return this._operandoA
    }

    getOperandoB(): number {
        return this._operandoB
    }
}

function main() {
    const operacao: Calculadora = new Calculadora(2, 5)
    console.log(operacao.somar())
}

main()
