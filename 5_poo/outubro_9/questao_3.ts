

import { Calculadora } from "../outubro_9/questao_2"

class CalculadoraCientifica extends Calculadora {
    
    constructor(operandoA: number, operandoB: number) {
        super(operandoA, operandoB)
    }
        
    /* Letra C: Foi necessária alguma modificação em Calculadora para o acesso aos atributos? */
    /* RESPOSTAS: Foi necessário criar funções tipo "get" p/ obter os atribs. privados da super classe */
    exponenciar() {
        return Math.pow(this.getOperandoA(), this.getOperandoB())
    }
}

function main() {
    const operacao: CalculadoraCientifica = new CalculadoraCientifica(2, 5)
    console.log(operacao.exponenciar())
}

main()
