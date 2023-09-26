

export class Messages {
    labels

    constructor() {
        this.labels = {
            infos: {
                warning: "\n===== AVISO =====\n",
                register: `\n========== ${"Cadastro de conta".toUpperCase()} ==========`,
                query: `\n========== ${"Consulta de conta".toUpperCase()} ==========`,
                withdraw: `\n========== ${"Saque em conta".toUpperCase()} ==========`,
                storage: `\n========== ${"Depósito em conta".toUpperCase()} ==========`,
                removal: `\n========== ${"Remoção de conta".toUpperCase()} ==========`,
                transfer: `\n========== ${"Transferência de valores entre contas".toUpperCase()} ==========`,
            },
            
            success: {
                creation: "Conta criada com sucesso!\n",
                storage: "Deposito efetuado com sucesso!\n",
                removal: "Conta removida com sucesso!\n",
                transfering: "Transferência efetuada com sucesso!\n",
            },

            fail: {
                find: "Conta não cadastrada ao banco!\n",
                transferNotEnoughFunds: "Transferência não autorizada! A quantia é maior que o saldo do provedor\n",
                twinAccounts: "Transferência cancelada! Impossível transferir de uma conta para a mesma conta!\n"
            },

            inputs: {
                operation: "Digite o valor de uma das operações acima >> ",
                withdraw: "Digite o valor do saque >>> ",
                store: "Digite o valor a ser depositado >>> ",
                idReceiverAccount:"Digite o número da conta a receber >>> ",
                idProviderAccount: "Digite o número da conta a fornecer >>> ",
                transferedValue: "Digite o valor a ser transferido >>> ",
            }
        }
    }
}

export class Account {
    number: string
    balance: number

    constructor(number: string, balance: number) {
        this.number = number
        this.balance = balance
    }
}

export class Bank {
    accounts: Account[]
    
    constructor(accounts: Account[]) {
        this.accounts = accounts
    }
    
    /*  Questão 1 - letra A
        -> Altere o método inserir para que não seja possível contas com mesmo número;
    */
    insert(account: Account): void {
        let repeated: boolean = false

        this.accounts.forEach(cadaConta => {
            account.number == cadaConta.number ? repeated = true : null
        })

        if (!repeated) {
            this.accounts.push(account)
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.creation)
        } else {
            console.log(new Messages().labels.infos.warning, `A conta ${account.number} já consta no banco!\n`)
        }
    }

    alter(account: Account): void {

    }

    query(i: string): Account {
        
        for (let j = 0; j < this.accountsAmount(); j++) {
            if (i == this.accounts[j].number) {
                return this.accounts[j]
            }
        }
        return new Account("0", 0)
    }

    remove(i: string): void {
        const accountExists = this.query(i)
        if (accountExists.number != "0") {
            // Tracking account by its id, and deleting it in case it is found
            this.accounts.forEach((eachAccount, accountIndex) => {
                if (eachAccount.number == i) {
                    this.accounts.splice(accountIndex, 1)
                }
            })
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.removal)
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }

    store(i: string, value: number): void {
        const accountExists = this.query(i)  
        if (accountExists.number != "0") {
            accountExists.balance += value
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.storage)
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }
    
    /*  Questão 1 - letra B
        sacar(number: string, valor: number): pesquisa uma conta e realiza uma
        operação de crédito com o valor passado;
    */
    withdraw(i: string, value: number): void {
        const accountExists = this.query(i)
        
        if (accountExists.number != "0") {
            if (value <= accountExists.balance) {
                accountExists.balance = accountExists.balance - value
                console.log(new Messages().labels.infos.warning, `Valor retirado: R$ ${value.toFixed(2)}\n`)
            } 
            else {
                console.log(new Messages().labels.infos.warning, `Valor de saque inválido! O saldo da conta ${accountExists.number} é insuficiente\n`)
            }
        } 
        else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }
    
    /* Questão 1 - letra C
        transferir(numberCredito: string, numberDebito: string, valor: number):
        realiza uma procura por ambas as contas e chama o método transferir de
        uma delas passando a conta de débito e o valor como parâmetros;
    */
    transfer(idFromBenefited: string, idFromDebited: string, value: number): void {
        let receiver = this.query(idFromBenefited)
        let provider = this.query(idFromDebited)
        
        if (receiver.number != "0" && provider.number != "0") {
            if (receiver.number != provider.number) {
                if (provider.balance >= value) {
                    provider.balance -= value
                    receiver.balance += value
                    console.log(new Messages().labels.infos.warning, new Messages().labels.success.transfering)
                }
                else {
                    console.log(new Messages().labels.infos.warning, new Messages().labels.fail.transferNotEnoughFunds)
                }
            } else {
                console.log(new Messages().labels.infos.warning, new Messages().labels.fail.twinAccounts)
            }
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }

    accountsAmount(): number {
        return this.accounts.length
    }

    displayGlobalBalance(): Account {
        /*
            let saldoGlobal = 0
            this.contas.forEach(conta => {
                saldoGlobal += conta.saldo
            })
            return saldoGlobal
        */
        
        return this.accounts.reduce((current: Account, next: Account) => {
            return new Account("0", current.balance + next.balance)
        })
    }

    displayGlobalBalanceMean(): number {
        return this.displayGlobalBalance().balance / this.accountsAmount()
    }
}

function appendAccounts() {
    // Inserção das contas
    bank.insert(joana)
    bank.insert(joena)
}

function simulateWithdraw() {
    console.log(`===== ${"simulação de saque".toUpperCase()} =====`)
    console.log(joanaExiste.number != "0" ? `Saldo da Joana: R$ ${joanaExiste.balance}` : null)
    bank.withdraw("1", 251)
    console.log(joanaExiste.number != "0" ? `Saldo da Joana: R$ ${joanaExiste.balance}` : null)
    bank.withdraw("1", 225)
    console.log(joanaExiste.number != "0" ? `Saldo da Joana: R$ ${joanaExiste.balance}` : null)
    // Até este momento, Joana só possui 25 de saldo
}

function simulateTransfer() {
    console.log(`\n===== ${"simulação de transferência".toUpperCase()} =====`)
    console.log(bank.accounts)
    console.log(joanaExiste)
    console.log(joenaExiste)
    bank.transfer("2", "1", 20)
    console.log(joanaExiste.number != "0" ? `Saldo da Joana: R$ ${joanaExiste.balance}` : null)
    console.log(joenaExiste.number != "0" ? `Saldo da Joena: R$ ${joenaExiste.balance}` : null)
}

function exhibitAccountsAmount() {
    console.log(`\n===== ${"Número de contas registradas".toUpperCase()} =====`)
    console.log(bank.accountsAmount())
}

function exhibitGlobalBalance() {
    console.log(`\n===== ${"Saldo global das contas cadastradas"} =====`)
    console.log(`R$ ${bank.displayGlobalBalance().balance.toFixed(2)}`)
}

function exhibitGlobalBalanceMean() {
    console.log(`\n===== ${"Média dos saldos das contas cadastradas"} =====`)
    console.log(`R$ ${bank.displayGlobalBalanceMean()}`)
}

let accounts: Account[] = []
let bank: Bank = new Bank(accounts)
    
// Contas
const joana: Account = new Account("1", 250)
const joena: Account = new Account("2", 300)

appendAccounts()

let joanaExiste = bank.query("1")
let joenaExiste = bank.query("2")

simulateWithdraw()
simulateTransfer()
exhibitAccountsAmount()
exhibitGlobalBalance()
exhibitGlobalBalanceMean()
