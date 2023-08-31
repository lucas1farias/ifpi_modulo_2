

const dados = [
    {id: 0, temperatura: 33, umidade: 84, poluicao: 90, ruido: 81, data: "22:36:08"},
    {id: 1, temperatura: 65, umidade: 85, poluicao: 81, ruido: 83, data: "22:36:08"},
    {id: 2, temperatura: 19, umidade: 88, poluicao: 93, ruido: 76, data: "22:36:08"},
    {id: 3, temperatura: 56, umidade: 99, poluicao: 66, ruido: 38, data: "22:36:08"},
    {id: 4, temperatura: 43, umidade: 22, poluicao: 56, ruido: 98, data: "22:36:08"},
    {id: 5, temperatura: 58, umidade: 84, poluicao: 33, ruido: 15, data: "22:36:08"},
    {id: 6, temperatura: 88, umidade: 22, poluicao: 47, ruido: 26, data: "22:36:08"},
    {id: 7, temperatura: 86, umidade: 64, poluicao: 70, ruido: 17, data: "22:36:08"},
    {id: 8, temperatura: 98, umidade: 76, poluicao: 69, ruido: 40, data: "22:36:08"},
    {id: 9, temperatura: 68, umidade: 74, poluicao: 76, ruido: 48, data: "22:36:08"},
    {id: 10, temperatura: 66, umidade: 39, poluicao: 62, ruido: 55, data: "22:36:08"},
    {id: 11, temperatura: 68, umidade: 58, poluicao: 90, ruido: 30, data: "22:36:08"},
    {id: 12, temperatura: 14, umidade: 50, poluicao: 52, ruido: 63, data: "22:36:08"},
    {id: 13, temperatura: 91, umidade: 68, poluicao: 46, ruido: 80, data: "22:36:08"},
    {id: 14, temperatura: 43, umidade: 11, poluicao: 11, ruido: 43, data: "22:36:08"},
    {id: 15, temperatura: 20, umidade: 16, poluicao: 50, ruido: 84, data: "22:36:08"},
    {id: 16, temperatura: 95, umidade: 11, poluicao: 62, ruido: 21, data: "22:36:08"},
    {id: 17, temperatura: 27, umidade: 21, poluicao: 91, ruido: 79, data: "22:36:08"},
    {id: 18, temperatura: 17, umidade: 86, poluicao: 66, ruido: 34, data: "22:36:08"},
    {id: 19, temperatura: 51, umidade: 20, poluicao: 50, ruido: 68, data: "22:36:08"},
    {id: 20, temperatura: 27, umidade: 41, poluicao: 16, ruido: 19, data: "22:36:08"},
    {id: 21, temperatura: 84, umidade: 68, poluicao: 89, ruido: 64, data: "22:36:08"},
    {id: 22, temperatura: 53, umidade: 28, poluicao: 37, ruido: 79, data: "22:36:08"},
    {id: 23, temperatura: 91, umidade: 84, poluicao: 46, ruido: 77, data: "22:36:08"},
    {id: 24, temperatura: 28, umidade: 98, poluicao: 64, ruido: 24, data: "22:36:08"},
    {id: 25, temperatura: 92, umidade: 33, poluicao: 54, ruido: 52, data: "22:36:08"},
    {id: 26, temperatura: 63, umidade: 64, poluicao: 51, ruido: 95, data: "22:36:08"},
    {id: 27, temperatura: 77, umidade: 73, poluicao: 68, ruido: 43, data: "22:36:08"},
    {id: 28, temperatura: 89, umidade: 26, poluicao: 15, ruido: 25, data: "22:36:08"},
    {id: 29, temperatura: 50, umidade: 65, poluicao: 86, ruido: 31, data: "22:36:08"},
    {id: 30, temperatura: 77, umidade: 71, poluicao: 71, ruido: 70, data: "22:36:08"},
    {id: 31, temperatura: 49, umidade: 73, poluicao: 47, ruido: 73, data: "22:36:08"},
    {id: 32, temperatura: 10, umidade: 76, poluicao: 97, ruido: 42, data: "22:36:08"},
    {id: 33, temperatura: 95, umidade: 69, poluicao: 85, ruido: 97, data: "22:36:08"},
    {id: 34, temperatura: 62, umidade: 96, poluicao: 78, ruido: 99, data: "22:36:08"},
    {id: 35, temperatura: 92, umidade: 94, poluicao: 96, ruido: 20, data: "22:36:08"},
    {id: 36, temperatura: 35, umidade: 33, poluicao: 43, ruido: 29, data: "22:36:08"},
    {id: 37, temperatura: 13, umidade: 49, poluicao: 19, ruido: 41, data: "22:36:08"},
    {id: 38, temperatura: 20, umidade: 18, poluicao: 63, ruido: 57, data: "22:36:08"},
    {id: 39, temperatura: 45, umidade: 91, poluicao: 58, ruido: 67, data: "22:36:08"},
    {id: 40, temperatura: 54, umidade: 56, poluicao: 69, ruido: 34, data: "22:36:08"},
    {id: 41, temperatura: 46, umidade: 46, poluicao: 58, ruido: 97, data: "22:36:08"},
    {id: 42, temperatura: 10, umidade: 96, poluicao: 78, ruido: 82, data: "22:36:08"},
    {id: 43, temperatura: 72, umidade: 80, poluicao: 42, ruido: 83, data: "22:36:08"},
    {id: 44, temperatura: 38, umidade: 99, poluicao: 65, ruido: 44, data: "22:36:08"},
    {id: 45, temperatura: 43, umidade: 66, poluicao: 61, ruido: 57, data: "22:36:08"},
    {id: 46, temperatura: 15, umidade: 32, poluicao: 82, ruido: 86, data: "22:36:08"},
    {id: 47, temperatura: 28, umidade: 95, poluicao: 95, ruido: 67, data: "22:36:08"},
    {id: 48, temperatura: 47, umidade: 96, poluicao: 81, ruido: 71, data: "22:36:08"},
    {id: 49, temperatura: 10, umidade: 23, poluicao: 87, ruido: 58, data: "22:36:08"},
]

// Porque há retornos "undefined" aqui?
class Valor {

    indice(min, max) {
        return Math.floor(Math.random() * max - min) + min
    }

    novoValor() {
        const valoresSemZero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let valor = ""

        for (let i = 0; i < 2; i++) {
            valor.length == 0 
            ? valor += valoresSemZero[this.indice(0, valoresSemZero.length)] 
            : valor += valores[this.indice(0, valores.length)] 
        }
        return Number(valor)
    }
    
    novoValorTemperatura() {
        const valoresSemZero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let valor = ""

        for (let i = 0; i < 2; i++) {
            valor.length == 0 
            ? valor += valoresSemZero[this.indice(0, valoresSemZero.length)] 
            : valor += valores[this.indice(0, valores.length)] 
        }
        let valorFinal = Number(valor)
        
        if (valorFinal <= 50) {
            return valorFinal
        } else {
            return this.novoValorTemperatura()
        }
    }
}

let novoValor = new Valor()
for (let i = 0; i < 50; i++) {
    console.log(novoValor.novoValorTemperatura())
}
