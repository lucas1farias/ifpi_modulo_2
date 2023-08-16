

/*
    8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que calculam a área e o perímetro. 
    Instancie um objeto dessa classe, atribua um valor ao raio e exiba a área e o perímetro chamando os dois 
    métodos definidos.
*/

class Circulo {
    public raio: number = 0

    public calcularArea(): number {
        return Math.PI * (this.raio ** 2)
    }

    public calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}

const forma = new Circulo()
forma.raio = 7
console.log(forma.calcularArea())
console.log(forma.calcularPerimetro())
