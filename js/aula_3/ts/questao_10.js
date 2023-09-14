"use strict";
// Porque na impressão da estrutura com dados atualizados, está havendo retornos nas strings com "undefined" e "NaN"
class Valor {
    indice(min, max) {
        return Math.floor(Math.random() * max - min) + min;
    }
    novoValor() {
        const valoresSemZero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let valor = "";
        for (let i = 0; i < 2; i++) {
            valor.length == 0
                ? valor += valoresSemZero[this.indice(0, valoresSemZero.length)]
                : valor += valores[this.indice(0, valores.length)];
        }
        return Number(valor);
    }
    novoValorTemperatura() {
        const valoresSemZero = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const valores = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let valor = "";
        for (let i = 0; i < 2; i++) {
            valor.length == 0
                ? valor += valoresSemZero[this.indice(0, valoresSemZero.length)]
                : valor += valores[this.indice(0, valores.length)];
        }
        let valorFinal = Number(valor);
        if (valorFinal <= 50) {
            return valorFinal;
        }
        else {
            return this.novoValorTemperatura();
        }
    }
}
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
}
class Umidade {
    constructor(valor) {
        this.valor = valor;
    }
}
class Poluicao {
    constructor(valor) {
        this.valor = valor;
    }
}
class Ruido {
    constructor(valor) {
        this.valor = valor;
    }
}
class Leitura {
    constructor(id, sensor) {
        this.id = id;
        this.sensor = sensor;
    }
}
class Sensor {
    constructor(temperatura, umidade, poluicao, ruido, data) {
        this.temperatura = temperatura;
        this.umidade = umidade;
        this.poluicao = poluicao;
        this.ruido = ruido;
        this.data = data;
    }
    dataFormatada() {
        const horario = this.data.toString().split(" ")[4];
        return horario;
    }
}
function media(colecao) {
    return colecao.map((i) => Number(((i.sensor.temperatura.valor + i.sensor.umidade.valor + i.sensor.poluicao.valor + i.sensor.ruido.valor) / 4).toFixed(2)));
}
function maior(colecao, atrib) {
    return colecao.reduce((i, j) => {
        if (atrib == "temperatura") {
            if (i.sensor.temperatura.valor > j.sensor.temperatura.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "umidade") {
            if (i.sensor.umidade.valor > j.sensor.umidade.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "poluição") {
            if (i.sensor.poluicao.valor > j.sensor.poluicao.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "ruído") {
            if (i.sensor.ruido.valor > j.sensor.ruido.valor) {
                return i;
            }
            else {
                return j;
            }
        }
    });
}
function menor(colecao, atrib) {
    return colecao.reduce((i, j) => {
        if (atrib == "temperatura") {
            if (i.sensor.temperatura.valor < j.sensor.temperatura.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "umidade") {
            if (i.sensor.umidade.valor < j.sensor.umidade.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "poluição") {
            if (i.sensor.poluicao.valor < j.sensor.poluicao.valor) {
                return i;
            }
            else {
                return j;
            }
        }
        if (atrib == "ruído") {
            if (i.sensor.ruido.valor < j.sensor.ruido.valor) {
                return i;
            }
            else {
                return j;
            }
        }
    });
}
// Função não dinâmica que serve "execInterval"
function newSensorReport() {
    let temperatura = new Temperatura(new Valor().novoValorTemperatura());
    let umidade = new Umidade(new Valor().novoValor());
    let poluicao = new Poluicao(new Valor().novoValor());
    let ruido = new Ruido(new Valor().novoValor());
    let sensorAtual = new Sensor(temperatura, umidade, poluicao, ruido, new Date());
    let leitura = new Leitura(leituraId, sensorAtual);
    dados.push(leitura);
    // console.log("-----o", dados[leituraId])
}
// Função não dinâmica que serve "execInterval"
function dataMappingAndReducing() {
    // Retorna objetos com atribs. acessíveis
    medias = media(dados);
    maiorTemperatura = maior(dados, "temperatura");
    maiorUmidade = maior(dados, "umidade");
    maiorPoluicao = maior(dados, "poluição");
    maiorRuido = maior(dados, "ruído");
    menorTemperatura = menor(dados, "temperatura");
    menorUmidade = menor(dados, "umidade");
    menorPoluicao = menor(dados, "poluição");
    menorRuido = menor(dados, "ruído");
}
// Função não dinâmica que serve "execInterval"
function showUpdatedEstructure() {
    const estrutura = {
        mediasArray: medias,
        temperaturaMaior: [`Leitura ${maiorTemperatura.id}`, `${maiorTemperatura.sensor.temperatura.valor}ºC`],
        umidadeMaior: [`Leitura ${maiorUmidade.id}`, `${maiorUmidade.sensor.umidade.valor}%`],
        poluicaoMaior: [`Leitura ${maiorPoluicao.id}`, `${maiorPoluicao.sensor.poluicao.valor}%`],
        ruidoMaior: [`Leitura ${maiorRuido.id}`, `${maiorRuido.sensor.ruido.valor}%`],
        temperaturaMenor: [`Leitura ${menorTemperatura.id}`, `${menorTemperatura.sensor.temperatura.valor}ºC`],
        umidadeMenor: [`Leitura ${menorUmidade.id}`, `${menorUmidade.sensor.umidade.valor}%`],
        poluicaoMenor: [`Leitura ${menorPoluicao.id}`, `${menorPoluicao.sensor.poluicao.valor}%`],
        ruidoMenor: [`Leitura ${menorRuido.id}`, `${menorRuido.sensor.ruido.valor}%`]
    };
    // Os dados são todos impressos de uma vez (deveriam sair um por vez) (não sei como fazer)
    console.log(estrutura);
}
function i(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function range(min, max) {
    const array = [];
    for (let i = min; i < max; i++) {
        array.push(i);
    }
    return array;
}
function execInterval() {
    const segundos = range(1, 3);
    const intervalo = segundos[i(0, segundos.length)] * 1000;
    setTimeout(() => {
        newSensorReport();
        leituraId++;
        dataMappingAndReducing();
        showUpdatedEstructure();
        execInterval();
    }, intervalo);
}
const dados = [];
let leituraId = 0;
let medias;
let maiorTemperatura;
let maiorUmidade;
let maiorPoluicao;
let maiorRuido;
let menorTemperatura;
let menorUmidade;
let menorPoluicao;
let menorRuido;
execInterval();
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
