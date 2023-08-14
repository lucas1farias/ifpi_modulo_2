

/* 
    4. Considerando os objetos Pessoa e Conta:

    a. Seria interessante em um sistema bancário um objeto "conta" possuir uma "pessoa" como um atributo 
    interno representando o titular da conta?

    Acho que sim, pois uma pessoa pode possuir várias contas, e em cada conta, seria interessante ela apontar 
    para o seu dono, não para o nome da pessoa, mas para o objeto da pessoa em si
*/

class Pessoa {
    public titular: string
    public cpf: string
    
    constructor(titular: string, cpf: string) {
        this.titular = titular
        this.cpf = cpf
    }
}

class Conta {
    // Espera um objeto JSON de outra classe
    public pessoa: Pessoa
    constructor(pessoa: Pessoa) {
        this.pessoa = pessoa 
    }
}

const ana = new Pessoa("Ana", "030.255.993.07")
const contaA = new Conta(ana)
console.log(contaA)
console.log(contaA.pessoa.titular)
