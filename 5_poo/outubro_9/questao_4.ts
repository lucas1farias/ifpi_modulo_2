

import {Bank, Account, SavingsAccount} from "../cls/bdd"

/* 9 de outubro de 2023 (questão 4, letra A, item V) */
function main() {
    const accounts: Account[] = []
    const bank: Bank = new Bank(accounts)
    let A: Account = new Account("1", 15)
    let B: SavingsAccount = new SavingsAccount("2", 65)
    
    bank.insert(A)
    bank.insert(B)
    
    /* Teste o método da classe Banco passando tanto um número de poupança como de conta passados inseridos anteriormente; */
    console.log('---o Saldo da conta B (antes de render juros): R$', B.getBalance())
    console.log(bank.getFeesProfit("1") == 1 ? "Tipo da conta A: Poupança" : "Tipo de conta A: Corrente")
    console.log(bank.getFeesProfit("2") == 1 ? "Tipo de conta B: Poupança" : "Tipo de conta B: Corrente")
    console.log('---o Saldo da conta B (após render juros): R$', B.getBalance())
}

main()
