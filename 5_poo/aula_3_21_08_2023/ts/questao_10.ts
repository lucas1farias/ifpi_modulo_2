

// Observe que  no meu código existe uma progressão de dados sendo adicionados
// Só que eu gostaria que eles fossem adicionados com intervalos de tempo, e não todos de uma vez
// Em outras palavras, eu gostaria de ver cada progresso de adição de dados
// Como eu faço isso?
class Valor {

    indice(min: number, max: number): number {
        return Math.floor(Math.random() * max - min) + min
    }

    novoValor() {
        const valoresSemZero: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        const valores: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let valor: string = ""

        for (let i = 0; i < 2; i++) {
            valor.length == 0 
            ? valor += valoresSemZero[this.indice(0, valoresSemZero.length)] 
            : valor += valores[this.indice(0, valores.length)] 
        }
        return Number(valor)
    }
}

class Temperatura {
    valor

    constructor(valor: number) {
        this.valor = valor
    }
}

class Umidade {
    valor

    constructor(valor: number) {
        this.valor = valor
    }
}

class Poluicao {
    valor

    constructor(valor: number) {
        this.valor = valor
    }
}

class Ruido {
    valor

    constructor(valor: number) {
        this.valor = valor
    }
}

class Leitura {
    id
    sensor

    constructor(id: number, sensor: Sensor) {
        this.id = id
        this.sensor = sensor
    }
}

class Sensor {
    temperatura
    umidade
    poluicao
    ruido
    data

    constructor(temperatura: Temperatura, umidade: Umidade, poluicao: Poluicao, ruido: Ruido, data: Date) {
        this.temperatura = temperatura
        this.umidade = umidade
        this.poluicao = poluicao
        this.ruido = ruido
        this.data = data
    }

    dataFormatada() {
        const horario = this.data.toString().split(" ")[4]
        return horario
    }
}

function media(colecao: Leitura[]): number[] {
    return colecao.map((i) => Number(((i.sensor.temperatura.valor + i.sensor.umidade.valor + i.sensor.poluicao.valor + i.sensor.ruido.valor) / 4).toFixed(2)))
}

function maior(colecao: Leitura[], atrib: string): Leitura {
    return colecao.reduce((i: Leitura, j: Leitura) => {
        if (atrib == "temperatura") {
            if (i.sensor.temperatura.valor > j.sensor.temperatura.valor) {return i} 
            else {return j}
        }
        if (atrib == "umidade") {
            if (i.sensor.umidade.valor > j.sensor.umidade.valor) {return i} 
            else {return j}
        }
        if (atrib == "poluição") {
            if (i.sensor.poluicao.valor > j.sensor.poluicao.valor) {return i} 
            else {return j}
        }
        if (atrib == "ruído") {
            if (i.sensor.ruido.valor > j.sensor.ruido.valor) {return i} 
            else {return j}
        }
    })
}

function menor(colecao: Leitura[], atrib: string): Leitura {
    return colecao.reduce((i: Leitura, j: Leitura) => {
        if (atrib == "temperatura") {
            if (i.sensor.temperatura.valor < j.sensor.temperatura.valor) {return i} 
            else {return j}
        }
        if (atrib == "umidade") {
            if (i.sensor.umidade.valor < j.sensor.umidade.valor) {return i} 
            else {return j}
        }
        if (atrib == "poluição") {
            if (i.sensor.poluicao.valor < j.sensor.poluicao.valor) {return i} 
            else {return j}
        }
        if (atrib == "ruído") {
            if (i.sensor.ruido.valor < j.sensor.ruido.valor) {return i} 
            else {return j}
        }
    })
}

const dados: Leitura[] = []
let leituraId: number = 0

while (dados.length < 10) {
    
    let temperatura: Temperatura = new Temperatura(new Valor().novoValor())
    let umidade: Umidade = new Umidade(new Valor().novoValor())
    let poluicao: Umidade = new Poluicao(new Valor().novoValor())
    let ruido: Ruido = new Ruido(new Valor().novoValor())
    let sensorAtual: Sensor = new Sensor(temperatura, umidade, poluicao, ruido, new Date())
    let leitura: Leitura = new Leitura(leituraId, sensorAtual)
    
    dados.push(leitura)
    // console.log("-----o", dados[leituraId])
    leituraId++

    const medias: number[] = media(dados)
    const maiorTemperatura: Leitura = maior(dados, "temperatura")
    const maiorUmidade: Leitura = maior(dados, "umidade")
    const maiorPoluicao: Leitura = maior(dados, "poluição")
    const maiorRuido: Leitura = maior(dados, "ruído")
    const menorTemperatura: Leitura = menor(dados, "temperatura")
    const menorUmidade: Leitura = menor(dados, "umidade")
    const menorPoluicao: Leitura = menor(dados, "poluição")
    const menorRuido: Leitura = menor(dados, "ruído")

    const estrutura = {
        medias: medias,
        maiorTemperatura: [`Leitura ${maiorTemperatura.id}`, `${maiorTemperatura.sensor.temperatura.valor}ºC`],
        maiorUmidade: [`Leitura ${maiorUmidade.id}`, `${maiorUmidade.sensor.umidade.valor}%`],
        maiorPoluicao: [`Leitura ${maiorPoluicao.id}`, `${maiorPoluicao.sensor.poluicao.valor}%`],
        maiorRuido: [`Leitura ${maiorRuido.id}`, `${maiorRuido.sensor.ruido.valor}%`],
        menorTemperatura: [`Leitura ${menorTemperatura.id}`, `${menorTemperatura.sensor.temperatura.valor}ºC`],
        menorUmidade: [`Leitura ${menorUmidade.id}`, `${menorUmidade.sensor.umidade.valor}%`],
        menorPoluicao: [`Leitura ${menorPoluicao.id}`, `${menorPoluicao.sensor.poluicao.valor}%`],
        menorRuido: [`Leitura ${menorRuido.id}`, `${menorRuido.sensor.ruido.valor}%`]
    }
    
    // Os dados são todos impressos de uma vez (deveriam sair um por vez) (não sei como fazer)
    console.log(estrutura)
}

/*
for (let i = 0; i < dados.length; i++) {
    console.log(
        `{id: ${dados[i].id}, temperatura: ${dados[i].sensor.temperatura.valor}, umidade: ${dados[i].sensor.umidade.valor}, poluicao: ${dados[i].sensor.poluicao.valor}, ruido: ${dados[i].sensor.ruido.valor}, data: "${dados[i].sensor.data.toString().split(" ")[4]}"},`
    )
    console.log(
        `${dados[i].id} | ${dados[i].sensor.temperatura.valor} C | ${dados[i].sensor.umidade.valor}% | ${dados[i].sensor.poluicao.valor}% | ${dados[i].sensor.ruido.valor}% | ${dados[i].sensor.data.toString().split(" ")[4]}`
    )
}
*/
