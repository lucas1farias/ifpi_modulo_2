"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(titular, cpf) {
        this.titular = titular;
        this.cpf = cpf;
    }
}
class Conta {
    constructor(pessoa) {
        this.pessoa = pessoa;
    }
}
const ana = new Pessoa("Ana", "030.255.993.07");
const contaA = new Conta(ana);
console.log(contaA);
console.log(contaA.pessoa.titular);
