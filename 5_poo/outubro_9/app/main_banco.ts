

import prompt from "prompt-sync"
import { Messages, Account, SavingsAccount, TaxAccount, Bank, File } from "../../cls/bdd"

class Algorithm {

    /* 9 de outubro de 2023 (modificado) */
    menu(): string {
        return `
        ========== BEM-VINDO AO BANCO JUBILEU ==========
        
        ********** OPERAÇÕES **********
        1. Cadastrar conta
        2. Consultar
        3. Sacar
        4. Depositar
        5. Exluir
        6. Transferir
        7. Render Juros
        
        ========== RELATÓRIOS DAS CONTAS ==========
        8. Extrair/Gerar
        9. Gravar
        10. Limpar 

        ++++++++++ ENCERRAR ++++++++++
        0. Sair
        
        Digite a operação >>> `
    }

    requestAccountId() {
        // This format avoids erros on terminal
        console.log("Digite o número da conta")
        const result = input(">>> ")
        return result
    }

    /* 9 de outubro de 2023 (questão 4, letra A, item IV) (modifier of function "insert") */
    requestAccountType() {
        console.log("Digite o tipo da conta:\n1. Corrente\n2. Poupança\n3. Imposto")
        const result = input(">>> ")
        return result
    }

    setValueAsCurrency(valor: number): string {
        return `RS ${valor.toFixed(2)}`
    }

    /* 9 de outubro de 2023 (modificado) */
    insert(): void {
        console.log(new Messages().labels.infos.register)
        
        const accountType: string = exe.requestAccountType()
        let accountId: string = ""
        
        switch (accountType) {
            case "1":
                accountId = exe.requestAccountId()
                const standardAccount = new Account(accountId, 0)
                bank.insert(standardAccount)
                break
            case "2":
                accountId = exe.requestAccountId()
                const savingsAccount = new SavingsAccount(accountId, 0)
                bank.insert(savingsAccount)
                break
            /* 9 de outubro de 2023 (questão 4, letra B) */
            /* Adicione a aplicação para também permitir o cadastro da ContaImposto feita em sala de aula */
            case "3":
                accountId = exe.requestAccountId()
                const taxAccount = new TaxAccount(accountId, 0)
                bank.insert(taxAccount)
                break
            default:
                console.log(new Messages().labels.infos.warning, new Messages().labels.fail.invalidAccountType)
                break
        }
    }

    query(): void {
        console.log(new Messages().labels.infos.query)
        const accountId: string = exe.requestAccountId()
        const account = bank.query(accountId)
        
        if (account.getNumber() != "0") {
            const accountData: string = `
                ===== INFOS =====
                status: ativa
                id: ${account.getNumber()}
                saldo: ${exe.setValueAsCurrency(account.getBalance())}
            `
            console.log(new Messages().labels.infos.warning, new Messages().labels.success.accountFound)
            console.log(accountData)
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }

    withdraw(): void {
        console.log(new Messages().labels.infos.withdraw)

        // Allow second input right after the first one in order to avoid code repetition
        let accountId: string = exe.requestAccountId()
        let withdrawValue: number = Number(input(new Messages().labels.inputs.withdraw))
        
        // In here, it is known if account exists and withdraw is possible
        bank.withdraw(accountId, withdrawValue) 
    }

    store(): void {
        console.log(new Messages().labels.infos.storage)
        
        // Allow second input right after the first one in order to avoid code repetition
        let accountId: string = exe.requestAccountId()
        let storedValue: number = Number(input(new Messages().labels.inputs.store))
        
        // In here, it is known if account exists and storage is possible
        bank.store(accountId, storedValue)
    }
    
    remove(): void {
        console.log(new Messages().labels.infos.removal)
        const idConta = exe.requestAccountId()
        bank.remove(idConta)
    }

    transfer(): void {
        console.log(new Messages().labels.infos.transfer)
        
        // Allow all inputs to be filled in order to avoid code repetition
        let idFromReceiver = input(new Messages().labels.inputs.idReceiverAccount)
        let idFromProvider = input(new Messages().labels.inputs.idProviderAccount)
        let value = Number(input(new Messages().labels.inputs.transferedValue))
        
        // This function will tell if transfering is possible
        bank.transfer(idFromReceiver, idFromProvider, value)
    }

    /* 9 de outubro de 2023 (questão 4, letra A, item V) */
    /* Altere a aplicação anteriormente sugerida para ter a opção de menu "Render Juros" */
    getFeesProfit(): void {
        const accountId: string = exe.requestAccountId()
        bank.getFeesProfit(accountId)
    }

    /* 9 de outubro de 2023 (questão 4, letra C) */ 
    createAcountsReport() {
        for(let i = 0; i < bank.accountsAmount(); i++) {
            exe.createFileRow(bank.accounts[i])
        }
        console.log(new Messages().labels.infos.warning, "Contas inseridas no arquivo!")
    }

    /* 9 de outubro de 2023 (questão 4, letra C) */ 
    /* Incremente a implementação da aplicação p/ recuperar de um arquivo texto p/ o array contas salvas em um arquivo contas.txt */
    retrieveAccountsReport() {
        console.log(new Messages().labels.infos.start)
        console.log(file.extract())
        console.log(new Messages().labels.infos.end)
    }

    /* 9 de outubro de 2023 (questão 4, letra D) */  
    /* Implemente também uma funcionalidade de gravar no mesmo arquivo o conteúdo do array de contas */
    createFileRow(i: Account | SavingsAccount | TaxAccount): void {
        let row: string = ""
        
        if (!(i instanceof SavingsAccount) && !(i instanceof TaxAccount)) {
            row += `${i.getNumber()};${i.getBalance()};C;`
            file.append(osPath, row + "\n")
        }
        if (i instanceof SavingsAccount) {
            row += `${i.getNumber()};${i.getBalance()};CP;${i.getFessTax()}`
            file.append(osPath, row + "\n")
        }
        if (i instanceof TaxAccount) {
            row += `${i.getNumber()};${i.getBalance()};CI;${i.getDiscountTax()}`
            file.append(osPath, row + "\n")
        }
    }
    
    /* 9 de outubro de 2023 (recurso não pedido) */ 
    clearAccountsReport() {
        file.write(osPath, "")
        console.log(new Messages().labels.infos.warning, "Linhas do arquivo removidas!")
    }
}

let input = prompt()
let accounts: Account[] = []
let bank: Bank = new Bank(accounts)
let instruction: string = ""
const exe: Algorithm = new Algorithm()
const osPath: string = "../registros/contas.txt"
const file: File = new File(osPath, "")

do {
    console.clear()
    console.log(exe.menu())
    instruction = input(new Messages().labels.inputs.operation)
    
    /* 9 de outubro de 2023 (modificado) (cases 7 ao 10) */
    switch (instruction) {
        case "1":
            exe.insert()
            break
        case "2":
            exe.query()
            break
        case "3":
            exe.withdraw()
            break
        case "4":
            exe.store()
            break
        case "5":
            exe.remove()
            break
        case "6":
            exe.transfer()
            break
        case "7":
            exe.getFeesProfit()
            break
        case "8":
            exe.retrieveAccountsReport()
            break
        case "9":
            exe.createAcountsReport()
            break
        case "10":
            exe.clearAccountsReport()
            break
    }
    
    input(new Messages().labels.infos.hitEnter)
    } while (instruction != "0")
    
    console.log(new Messages().labels.infos.warning, new Messages().labels.infos.appClosure)
