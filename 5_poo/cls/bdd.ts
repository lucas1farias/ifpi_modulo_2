

/* npm install fs-extra    npm install --save-dev @types/fs-extra */
import * as manager from 'fs-extra'; 

export class File {
    osPath: string
    content: string

    constructor(osPath: string, content: string) {
        this.osPath = osPath
        this.content = content
    }

    extract() {
        return manager.readFileSync(this.osPath, "utf8")
    }
    
    // Overwrites the target file content completely
    write(filePath: string, content: string) {
        return manager.writeFileSync(filePath, content, "utf8")
    }
    
    // Collects new file rows as file receives updates
    append(filePath: string, content: string) {
        return manager.appendFileSync(filePath, content, "utf8")
    }
}

export class Messages {
    labels

    constructor() {
        this.labels = {
            infos: {
                warning: "\n===== AVISO =====\n",
                start: "\n========== ÍNICIO ==========\n",
                end: "\n========== FIM ==========\n",
                appClosure: "Aplicação encerrada!\n",
                hitEnter: "\n <<<<<<<<<< Pressione ENTER >>>>>>>>>>\n",
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
                accountFound: "========== CONTA ENCONTRADA ==========\n"
            },

            fail: {
                find: "Conta não cadastrada ao banco!\n",
                transferNotEnoughFunds: "Transferência não autorizada! A quantia é maior que o saldo do provedor!\n",
                twinAccounts: "Transferência cancelada! Impossível transferir de uma conta para a mesma conta!\n",
                // add em: 9 de outubro de 2023
                accountIsStandard: "A conta escolhida não é do tipo poupança!\n",
                invalidAccountType: "O número da conta não consta nas opções dos tipos de conta!\n"
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

export class Bank {
    accounts: Account[]
    
    constructor(accounts: Account[]) {
        this.accounts = accounts
    }
    
    /* 2 de outubro de 2023 (questão 1, letra A) */
    /* Altere o método inserir para que não seja possível contas com mesmo número */
    insert(account: Account): void {
        let repeated: boolean = false

        this.accounts.forEach(cadaConta => {
            account.getNumber() == cadaConta.getNumber() ? repeated = true : null
        })

        if (!repeated) {
            this.accounts.push(account)
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.creation)
        } else {
            console.log(new Messages().labels.infos.warning, `A conta ${account.getNumber()} já consta no banco!\n`)
        }
    }

    alter(account: Account): void {

    }

    query(i: string): Account {
        
        for (let j = 0; j < this.accountsAmount(); j++) {
            if (i == this.accounts[j].getNumber()) {
                return this.accounts[j]
            }
        }
        return new Account("-1", 0)
    }

    remove(i: string): void {
        const accountExists = this.query(i)
        if (accountExists.getNumber() != "0") {
            // Tracking account by its id, and deleting it in case it is found
            this.accounts.forEach((eachAccount, accountIndex) => {
                if (eachAccount.getNumber() == i) {
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
        if (accountExists.getNumber() != "0") {
            // accountExists.getBalance() += value
            accountExists.setBalance(accountExists.getBalance() + value)
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.storage)
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }
    
    /* 2 de outubro de 2023 (questão 1, letra B) */
    /* sacar(number: string, valor: number) */
    /* pesquisa uma conta e realiza uma operação de crédito com o valor passado */
    withdraw(i: string, value: number): void {
        const account = this.query(i)
        
        if (account.getNumber() != "-1") {
            if (value <= account.getBalance()) {
                account.setBalance(account.getBalance() - value)
                console.log(new Messages().labels.infos.warning, `Valor retirado: R$ ${value.toFixed(2)}\n`)
            } 
            else {
                console.log(new Messages().labels.infos.warning, `Conta ${account.getNumber()} possui saldo insuficiente\n`)
            }
        } 
        else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }
    
    /* 2 de outubro de 2023 (questão 1, letra C) */
    /* transferir(numberCredito: string, numberDebito: string, valor: number): */
    /* realiza uma procura por ambas as contas e chama "transferir" de uma delas passando a conta de débito e o valor c/ parâmetros */
    transfer(idFromBenefited: string, idFromDebited: string, value: number): void {
        let receiver = this.query(idFromBenefited)
        let provider = this.query(idFromDebited)
        
        if (receiver.getNumber() != "0" && provider.getNumber() != "0") {
            if (receiver.getNumber() != provider.getNumber()) {
                if (provider.getBalance() >= value) {
                    // provider.getBalance() -= value
                    provider.setBalance(provider.getBalance() - value)
                    // receiver.getBalance() += value
                    receiver.setBalance(receiver.getBalance() + value)
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
            return new Account("0", current.getBalance() + next.getBalance())
        })
    }

    displayGlobalBalanceMean(): number {
        return this.displayGlobalBalance().getBalance() / this.accountsAmount()

    }
    
    /* 9 de outubro de 2023 (questão 4, letra A, item I) */
    /* Implemente na classe Banco o método renderJuros(numero: string): number */
    /* Onde: É passado por parâmetro o número de uma poupança e feita uma consulta para ver se a conta existe */
    /* Note que a consulta não se altera sendo Conta ou Poupança; */
    getFeesProfit(number: string): number {
        let conta
        for (let i = 0; i < this.accounts.length; i++) {
            /* II: Caso a poupança seja encontrada */
            if (number == this.accounts[i].getNumber()) {
                conta = this.accounts[i]
                
                /* II: teste se realmente se trata de uma poupança com o operador instanceof */
                if (conta instanceof SavingsAccount) {
                    
                    /* III: Caso seja, faça um cast e invoque o método renderJuros da própria instância encontrada */
                    (<SavingsAccount> conta).getFeesProfit()
                    return 1
                } else {
                    console.log(new Messages().labels.infos.warning, new Messages().labels.fail.accountIsStandard)
                }
            }
        }
        /* II: desconsidere a operação caso contrário; */
        return 0
    }
}

export class Account {
    private _number: string
    private _balance: number

    constructor(number: string, balance: number) {
        this._number = number
        this._balance = balance
    }

    // 9 de outubro de 2023
    getNumber() {
        return this._number
    }
    
    // 9 de outubro de 2023
    getBalance() {
        return this._balance
    }

    // 9 de outubro de 2023
    setBalance(value: number) {
        this._balance = value
        return this._balance
    }
}

// 9 de outubro de 2023
export class SavingsAccount extends Account {
    private _feesTax: number

    constructor(number: string, balance: number) {
        super(number, balance)
        this._feesTax = 0.5
    }

    getFessTax() {
        return this._feesTax
    }

    store(value: number) {
        // let balance = this.getBalance()
        // balance += value
        // this.setBalance(balance)
        this.setBalance(this.getBalance() + value)
    }

    getFeesProfit(): void {
        let profit = this.getBalance() * this._feesTax / 100
        this.store(profit);
    }
}

/* 9 de outubro de 2023 (questão 4, letra B) */
/* Adicione a aplicação para também permitir o cadastro da ContaImposto feita em sala de aula */
export class TaxAccount extends Account {
    private _discountTax: number;
    
    constructor(number: string, balance: number) {
        super(number, balance)
        this._discountTax = 0.38
    }

    getDiscountTax() {
        return this._discountTax
    }
}

/* 9 de outubro de 2023 (questão 5, letra G) */
export class Stock {
    /* letra G */
    private _products: Product[]

    constructor(products: Product[]) {
        this._products = products
    }
    
    /* letra I */
    hasRepeatedId(id: number): boolean {
        for (let i = 0; i < this._products.length; i++) {
            if (id == this._products[i].getIdentifier()) {
                return true
            }
        }
        return false;
    }
    
    /* letra H */
    insert(product: Product): void {
        if (!this.hasRepeatedId(product.getIdentifier())) {
            
            // If product is regular (belongs to superclass)
            if (!(product instanceof PerishableProduct)) {
                this._products.push(product)
                console.log("Produto adicionado a lista!")
            }
            // If is perishable (belongs to subclass)
            else {
                if ((<PerishableProduct> product).isNotExpired()) {
                    this._products.push(product)
                }
                else {
                    console.log("Produto fora da validade!")
                }
            }
        } else {
            console.log("Produto com este id já existe")
        }
    }
    
    /* letra H */
    query(id: number): Product {
        for (let i = 0; i < this._products.length; i++) {
            if (id == this._products[i].getIdentifier()) {
                return this._products[i]
            }
        }
        return new Product(-1, "", -1, -1);
    }

    /* letra H */
    wipe(id: number): void {
        for (let i = 0; i < this._products.length; i++) {
            if (id == this._products[i].getIdentifier()) {
                this._products.splice(i, 1)
            }
            else {
                console.log("Produto não encontrado na lista!")
            }
        }
    }

    /* letra H */
    includeStock(id: number, increment: number): void {
        const searchedProduct = this.query(id)
        
        if (searchedProduct.getIdentifier() != -1) {
            
            // If product is perishable
            if (searchedProduct instanceof PerishableProduct) {
                /* letra f) and not expired */
                if ((<PerishableProduct> searchedProduct).isNotExpired()) {
                    /* letra j) then increase its amount */
                    (<Product> searchedProduct).includeStock(increment)    
                } else {
                    console.log("Produto fora da validade!")
                }
            }
            // If not perishable, include without asking validity
            else {
                (<Product> searchedProduct).includeStock(increment) 
            }
        } 
        else {
            console.log("Produto não encontrado na lista!")
        }
    }

    /* letra H */
    excludeStock(id: number, decrement: number) {
        const searchedProduct = this.query(id)

        if (searchedProduct.getIdentifier() != -1) {
            
            // If product is perishable
            if (searchedProduct instanceof PerishableProduct) {
                /* F) and not expired */
                if ((<PerishableProduct> searchedProduct).isNotExpired()) {
                    /* F) then decrease its amount */
                    (<Product> searchedProduct).excludeStock(decrement)    
                } else {
                    console.log("Produto fora da validade!")
                }
            }
            // If not perishable, exclude without asking validity
            else {
                (<Product> searchedProduct).excludeStock(decrement) 
            }
        }
        else {
            console.log("Produto não encontrado na lista!")
        }
    }

    /* letra L */
    listPerishableProducts(): Product[] {
        const perishables: Product[] = []
        for (let i = 0; i < this._products.length; i++) {
            // If is perishable
            if (this._products[i].hasOwnProperty("_expireDate")) {
                // and has expired
                if(!(<PerishableProduct> this._products[i]).isNotExpired()) {
                    perishables.push(this._products[i])
                }
            }
        }
        return perishables
    }
}

/* 9 de outubro de 2023 (questão 5, letra A) */
export class Product {
    /* letra B */
    private _identifier: number
    private _description: string
    private _amount: number
    private _price: number

    constructor(identifier: number, description: string, amount: number, price: number) {
        this._identifier = identifier
        this._description = description
        this._amount = amount
        this._price = price
    }

    getIdentifier() {
        return this._identifier
    }

    getAmount() {
        return this._amount
    }

    setAmount(value: number) {
        this._amount = value
        return this._amount
    }
    
    /* letra D */
    includeStock(increment: number) {
        this.setAmount(this._amount + increment)
    }

    /* letra D */
    excludeStock(decrement: number) {
        this.setAmount(this._amount - decrement)
    }
}

/* 9 de outubro de 2023 (questão 5, letra A) */
export class PerishableProduct extends Product {
    /* letra C */
    protected _expireDate: string

    constructor(identifier: number, description: string, amount: number, price: number, expireDate: string) {
        super(identifier, description, amount, price)
        this._expireDate = expireDate
    }

    getExpireDate() {
        return this._expireDate
    }

    setExpireDate(newDate: string) {
        this._expireDate = newDate
        return this._expireDate
    }

    /* letra E */
    isNotExpired(): boolean {
        const today: Date = new Date()
        const expireDateArray: string[] = this._expireDate.split("/")

        const expireDate: Date = new Date(
            Number(expireDateArray[2]),
            Number(expireDateArray[1]) - 1,
            Number(expireDateArray[0])
        )
        
        // Expire day did not reach today
        return today <= expireDate;
    }
}

/* 16 de outubro de 2023 (questão 1) */
export class Employee {
    salary: number = 500

    /* (questão 1, letra A)
    Implemente os métodos calcularSalario() de cada classe da seguinte forma:
    Empregado: apenas retorna o valor do atributo salário;
    */
    calculateSalary(): number {
        return this.salary
    }
}

/* 16 de outubro de 2023 (questão 1) */
export class Diarist extends Employee {
    /* (questão 1, letra B)
    Diarista: sobrescreve calcularSalario, chamando o método homônimo de Empregado e dividindo o resultado por 30;
    */
    calculateSalary(): number {
        return (<Employee> new Employee).calculateSalary() / 30
    }
}

/* 16 de outubro de 2023 (questão 1) */
export class HourlyDiarist extends Diarist {
    /* (questão 1, letra C)
    Horista: sobrescreve calcularSalario, chamando o método homônimo de Diarista e dividindo o resultado por 24.
    */
    calculateSalary(): number {
        return (<Diarist> new Diarist).calculateSalary() / 24
    }
}

/* 16 de outubro de 2023 (questão 2) */
export class Person {
    /* (letra A) 
    Crie uma classe Pessoa com:
    Atributos privados _nome (tipo string) e _sobrenome (tipo string). 
    */
   _name: string
   _lastName: string

    constructor(name: string, lastName: string, fullName: string) {
        this._name = name
        this._lastName = lastName
        /* (letra C)
        Um construtor que recebe como parâmetros o nome e o sobrenome da pessoa e inicializa 
        respectivamente os atributos nome e sobrenome. 
        */
        fullName = name + lastName
    }
    
    /* (letra A) Cada um desses atributos deve ter métodos para lê-los (getters). */
    get name(): string {
        return this._name
    }
    
    /* (letra A) Cada um desses atributos deve ter métodos para lê-los (getters). */
    get lastName(): string {
        return this._lastName
    }
    
    /* (letra B)
    Um método get chamado nomeCompleto que não possui parâmetros de entrada e que retorna a 
    concatenação do atributo nome com o atributo sobrenome. 
    */
    get fullName(): string {
        return this.name + this.lastName
    }
}

/* 16 de outubro de 2023 (questão 3) 
3. Crie uma subclasse de Pessoa, chamada Funcionario que deve possuir: 
*/
export class EmployeeV2 extends Person {
    _identifier: string
    _salary: number

    constructor(name: string, lastName: string, fullName: string, identifier: string, salary: number) {
        super(name, lastName, fullName)
        this._identifier = identifier
        
        /* (letra B) O salário de um funcionário jamais poderá ser negativo. */
        if (salary >= 0) {
            this._salary = salary
        } else {
            this._salary = 0
        }
    }
    
    get identifier(): string {
        return this._identifier
    }

    get salary(): number {
        return this._salary
    }
    
    calculateFirstSalaryMontant(): number {
        return this.salary * (60/100)
    }

    calculateSecondtSalaryMontant(): number {
        return this.salary * (40/100)
    }
}

/* 16 de outubro de 2023 (questão 4) */
export class Professor extends EmployeeV2 {
    title: string

    constructor(name: string, lastName: string, fullName: string, identifier: string, salary: number, title: string) {
        super(name, lastName, fullName, identifier, salary)
        this.title = title
    }

    calculateFirstSalaryMontant(): number {
        return this.salary
    }

    calculateSecondtSalaryMontant(): number {
        return 0
    }
}

/* 16 de outubro de 2023 (questão 5) */
// (parte 1) Crie uma classe chamada Folha de pagamento
export class PaymentSheet {
    // (parte 2) que no construtor receba um array de Pessoa
    employees: Person[]
    
    // (parte 3) e inicialize um atributo do mesmo tipo.
    constructor(employees: Person[]) {
        this.employees = employees
    }
    
    /* (parte 4)
    Crie um método chamado calcularPagamentos() que retorna um valor que represente o total de 
    salários dos elementos do array.
    */ 
    calculatePayments(): Person {
        /*
        let paymentAmount: number = 0
        for (let i = 0; i < this.employees.length; i++) {
            paymentAmount += (<EmployeeV2>this.employees[i]).salary
        }
        return paymentAmount
        */
        
        return this.employees.reduce((current: Person, next: Person) => {
            return new EmployeeV2("", "", "", "", ((<EmployeeV2>current).salary) + (<EmployeeV2>next).salary)
        })
    }
}
