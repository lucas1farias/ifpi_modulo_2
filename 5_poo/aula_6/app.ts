

import prompt from "prompt-sync"
import { Account, Bank, Messages } from "./banco"

function menu(): void {
    const greetings: string = '\n========== Banco Fantástico =========='
    const operations: string = `\n${"operações disponíveis".toUpperCase()}:
    1. Cadastrar conta
    2. Consultar
    3. Sacar
    4. Depositar
    5. Exluir
    6. Transferir
    0. Sair`
    console.log(greetings + operations)
}

let input = prompt()
let accounts: Account[] = []
let bank: Bank = new Bank(accounts)
let instruction: string = ""

do {
    console.clear()
    menu()
    instruction = input(new Messages().labels.inputs.operation)
    
    switch (instruction) {
        case "1":
            insert()
            break
        case "2":
            query()
            break
        case "3":
            withdraw()
            break
        case "4":
            store()
            break
        case "5":
            remove()
            break
        case "6":
            transfer()
            break
    }
    
    input("\nPressione a tecla ENTER\n")
    } while (instruction != "0")
    
    console.log(new Messages().labels.infos.warning, "Aplicação encerrada!")

    // Auxiliares
    function requestAccountId() {
        return input("Digite o número da conta >>> ")
    }

    function convertValueAsCoinType(valor: number): string {
        return `RS ${valor.toFixed(2)}`
    }

    // Principais
    function insert(): void {
        console.log(new Messages().labels.infos.register)
        let accountId: string = requestAccountId()
        const account: Account = new Account(accountId, 0)
        bank.insert(account)
    }

    function query(): void {
        console.log(new Messages().labels.infos.query)
        const accountId: string = requestAccountId()
        const accountExists = bank.query(accountId)
        
        if (accountExists.number != "0") {
            console.log(new Messages().labels.infos.warning, `Conta encontrada:\n    status: ativa\n    id: ${accountExists.number}\n    saldo: ${convertValueAsCoinType(accountExists.balance)}`)
        } else {
            console.log(new Messages().labels.infos.warning, new Messages().labels.fail.find)
        }
    }

    function withdraw(): void {
        console.log(new Messages().labels.infos.withdraw)
        let accountId: string = requestAccountId()
        // Allow second input in order to avoid code repetition
        let withdrawValue: number = Number(input(new Messages().labels.inputs.withdraw))
        // In here, it is known if account exists and withdraw is possible
        bank.withdraw(accountId, withdrawValue) 
    }

    function store(): void {
        console.log(new Messages().labels.infos.storage)
        let accountId: string = requestAccountId()
        // Allow second input in order to avoid code repetition
        let storedValue: number = Number(input(new Messages().labels.inputs.store))
        // In here, it is known if account exists and storage is possible
        bank.store(accountId, storedValue)
    }
    
    function remove(): void {
        console.log(new Messages().labels.infos.removal)
        const idConta = requestAccountId()
        bank.remove(idConta)
    }

    function transfer(): void {
        console.log(new Messages().labels.infos.transfer)
        
        // Allow all inputs to be filled in order to avoid code repetition
        let idFromReceiver = input(new Messages().labels.inputs.idReceiverAccount)
        let idFromProvider = input(new Messages().labels.inputs.idProviderAccount)
        let value = Number(input(new Messages().labels.inputs.transferedValue))
        
        // This function will tell if transfering is possible
        bank.transfer(idFromReceiver, idFromProvider, value)
    }
