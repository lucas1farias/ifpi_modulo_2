

/* 4. Considerando os objetos Pessoa e Conta:

    b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de uma conta como atributo? 
    Que elemento da programação estruturada melhor representaria o conjunto de contas de uma pessoa?

    Acho que sim, pois uma pessoa pode ter mais de uma conta
*/

class Pessoa {
    public titular: string
    public contas: Conta[]

    constructor(titular: string) {
        this.titular = titular
        this.contas = []
    }
    
    // Parâmetro que espera um objeto JSON
    adicionarConta(conta: Conta) {
        this.contas.push(conta);
    }
}

class Conta {
    public num: number
    public titular: Pessoa
    
    constructor(num: number, titular: Pessoa) {
        this.num = num
        this.titular = titular
        /*
          "this.titular" pertencendo a outra classe, pode acessar funções da sua classe "Pessoa"
          além disso, "this.titular" passa a si mesmo como parâmetro p/ a função da sua classe
          imediatamente após add um titular, este é add a "this.contas" da classe "Pessoa" 
        */
        titular.adicionarConta(this) 
    }
}

const lucas = new Pessoa("Lucas")
const contaA = new Conta(1, lucas)
console.log(contaA)

const contas_de_lucas = lucas.contas

for (let i = 0; i < contas_de_lucas.length; i++) {
    const conta = contas_de_lucas[i].num
    const dono = contas_de_lucas[i].titular.titular
    console.log(`Conta: ${conta}\nDono: ${dono}\n`)
}
