

export class Contav2 {
    numero: string
    saldo: number

    constructor(numero: string, saldo: number) {
        this.numero = numero
        this.saldo = saldo
    }
}

export class Banco {
    contas: Contav2[]

    constructor(contas: Contav2[]) {
        this.contas = contas
    }
    
    /*  Questão 1 - letra A
        -> Altere o método inserir para que não seja possível contas com mesmo número;
    */
    inserir(conta: Contav2): void {
        let repetido: boolean = false

        // for (let j = 0; j <= this.contas.length; j++) {
            // conta.numero == this.contas[j].numero ? repetido = true : null
        // }

        this.contas.forEach(cadaConta => {
            conta.numero == cadaConta.numero ? repetido = true : null
        })

        !repetido ? this.contas.push(conta) : console.log(`A conta ${conta.numero} já consta no banco!`)
    }

    alterar(conta: Contav2): void {

    }

    consultar(i: string): Contav2 | boolean {
        
        for (let j = 0; j <= this.quantidadeDeContas(); j++) {
            if (i == this.contas[j].numero) {
                return this.contas[j]
            }
        }
        return false
    }

    excluir(i: string): void {

    }

    depositar(i: string, valor: number): void {

    }
    
    /*  Questão 1 - letra B
        sacar(numero: string, valor: number): pesquisa uma conta e realiza uma
        operação de crédito com o valor passado;
    */
    sacar(i: string, valor: number): void {
        let contaExiste = this.consultar(i)
        
        // if (contaExiste) não funciona, então foi perguntado a instancia
        if (contaExiste instanceof Contav2) {
            if (valor <= contaExiste.saldo) {
                contaExiste.saldo = contaExiste.saldo - valor
                console.log(`Saque efetuado! você retirou R$ ${valor.toFixed(2)}`)
            } else {
                console.log(`Valor de saque inválido! O saldo da conta ${contaExiste.numero} é insuficiente`)
            }
        }
    }

    // consultarSaldo(i: string): number {

    // }
    
    /* Questão 1 - letra C
        transferir(numeroCredito: string, numeroDebito: string, valor: number):
        realiza uma procura por ambas as contas e chama o método transferir de
        uma delas passando a conta de débito e o valor como parâmetros;
    */
    transferir(idCreditado: string, idDebitado: string, valor: number): void {
        let receptor = this.consultar(idCreditado)
        let provedor = this.consultar(idDebitado)
        
        if (receptor instanceof Contav2 && provedor instanceof Contav2) {
            if (provedor.saldo >= valor) {
                provedor.saldo -= valor
                receptor.saldo = receptor.saldo + valor
            }
            else {
                console.log("Transferência não autorizada pela quantia ser maior que o saldo do provedor")
            }
        }
    }

    quantidadeDeContas(): number {
        return this.contas.length
    }

    exibirSaldoGlobal(): number {
        let saldoGlobal = 0
        this.contas.forEach(conta => {
            saldoGlobal += conta.saldo
        })
        return saldoGlobal
    }

    exibirMediaSaldos(): number {
        return this.exibirSaldoGlobal() / this.quantidadeDeContas()
    }
}

function addContas() {
    // Inserção das contas
    banco.inserir(joana)
    banco.inserir(joena)
}

function simularSaque() {
    console.log(`===== ${"simulação de saque".toUpperCase()} =====`)
    console.log(joanaExiste instanceof Contav2 ? `Saldo da Joana: R$ ${joanaExiste.saldo}` : null)
    banco.sacar("1", 251)
    console.log(joanaExiste instanceof Contav2 ? `Saldo da Joana: R$ ${joanaExiste.saldo}` : null)
    banco.sacar("1", 225)
    console.log(joanaExiste instanceof Contav2 ? `Saldo da Joana: R$ ${joanaExiste.saldo}` : null)
    // Até este momento, Joana só possui 25 de saldo
}

function simularTransferencia() {
    console.log(`\n===== ${"simulação de transferência".toUpperCase()} =====`)
    console.log(banco.contas)
    console.log(joanaExiste)
    console.log(joenaExiste)
    banco.transferir("2", "1", 20)
    console.log(joanaExiste instanceof Contav2 ? `Saldo da Joana: R$ ${joanaExiste.saldo}` : null)
    console.log(joenaExiste instanceof Contav2 ? `Saldo da Joena: R$ ${joenaExiste.saldo}` : null)
}

function qtdContas() {
    console.log(`\n===== ${"Número de contas registradas".toUpperCase()} =====`)
    console.log(banco.quantidadeDeContas())
}

function saldoGlobal() {
    console.log(`\n===== ${"Saldo global das contas cadastradas"} =====`)
    console.log(`R$ ${banco.exibirSaldoGlobal().toFixed(2)}`)
}

function mediaSaldoGlobal() {
    console.log(`\n===== ${"Média dos saldos das contas cadastradas"} =====`)
    console.log(`R$ ${banco.exibirMediaSaldos()}`)
}

let contas: Contav2[] = []
let banco: Banco = new Banco(contas)
    
// Contas
const joana: Contav2 = new Contav2("1", 250)
const joena: Contav2 = new Contav2("2", 300)

addContas()

let joanaExiste = banco.consultar("1")
let joenaExiste = banco.consultar("2")

simularSaque()
simularTransferencia()
qtdContas()
saldoGlobal()
mediaSaldoGlobal()
