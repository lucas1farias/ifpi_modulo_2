

/*
3. Crie uma classe chamada "CalculadoraCientifica" que herda 
da classe Calculadora do exercício passado e:
a. Implemente um método chamado exponenciar que retorne o primeiro
operando elevado ao segundo;
b. Teste a classe;
c. Foi necessária alguma modificação em Calculadora para o acesso aos
atributos?
*/

import {Calculadora} from "../outubro_9/questao_2"

class CalculadoraCientifica extends Calculadora {
    
    constructor(operandoA: number, operandoB: number) {
        super(operandoA, operandoB)
    }
    
    // Foi necessário criar funções de retorno dos atribs. privados por eles serem privadas
    exponenciar() {
        return Math.pow(this.getPrimeiroOperando(), this.getSegundoOperando())
    }
}

function main() {
    const operacao: CalculadoraCientifica = new CalculadoraCientifica(2, 5)
    console.log(operacao.exponenciar())
}

main()
