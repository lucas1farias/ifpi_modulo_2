

/* 
    1. Qual a diferença entre objetos e classes? Exemplifique.
*/

// Classe é uma entidade/objeto do mundo real representado virtualmente 
class Produto {
    // Esse objetos, físicos ou não, possuem atributos
    nome: string
    preco: number
    marca?: string

    constructor(nome: string, preco: number, marca?: string) {
        this.nome = nome
        this.preco = preco
        this.marca = marca
    }
}

// Pela classe, damos origem a objetos vindos dela
const lanterna = new Produto("Lanterna Et", 40)
const caneta = new Produto("Caneta Bic azul", 3.50, "Bic")

// Esses objetos podem usar os recursos criados na classe
console.log(lanterna.marca)
lanterna.marca = "Lautus"
console.log(lanterna.marca)
