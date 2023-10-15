

class VeiculoV2 {
    placa: string
    ano: number

    constructor(placa: string, ano: number) {
        this.placa = placa
        this.ano = ano
    }
}

class CarroV2 extends Veiculo {
    modelo: string

    constructor(placa: string, ano: number, modelo: string) {
        super(placa, ano)
        this.modelo = modelo
    }
}

// Carro extends 2 attribs. from "Veiculo" and 1 from "Carro"
class CarroEletricoV2 extends Carro {
    autonomiaBateria: number

    constructor(placa: string, ano: number, modelo: string, autonomiaBateria: number) {
        super(placa, ano, modelo)
        this.autonomiaBateria = autonomiaBateria 
    }
}
