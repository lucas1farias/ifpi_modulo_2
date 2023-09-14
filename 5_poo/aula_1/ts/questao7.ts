

/*
    Usando playground (https://www.typescriptlang.org/play), faça:
    
    7. Considerando o exemplo da classe Retangulo dos slides, implemente um método adicional chamado que 
    calcule o perímetro do retângulo e altere a classe TestaRetangulo para exibir o cálculo do perímetro.
*/

class Retangulo {
    public l1: number = 0; // comprimento (2 lados ==)
    public l2: number = 0; // largura (2 lados ==)
    
    calcularArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return 2 * (this.l1 + this.l2)
    }
}

const ret = new Retangulo()
ret.l1 = 2
ret.l2 = 5
console.log(ret.calcularArea())
console.log(ret.calcularPerimetro())
