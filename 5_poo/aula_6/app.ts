

import prompt from "prompt-sync"
import { Contav2, Banco } from "./banco"

function menu(): void {
    const saudacao: string = '\n========== Banco Fantástico =========='
    const opcoes: string = `\n${"operações disponíveis".toUpperCase()}:
    1. Cadastrar conta
    2. Consultar
    3. Sacar
    4. Depositar
    5. Exluir
    6. Transferir
    0. Sair`
    console.log(saudacao + opcoes)
}

let entrada = prompt()
let contas: Contav2[] = []
let banco: Banco = new Banco(contas)
let opcao: string = ""

const msgs = {
    // Conteúdos das entradas
    txtOperacao: "\nDigite o número da operação acima >>> ",
    txtValorSaque: "Digite o valor do saque >>> ",
    txtValorDeposito: "Digite o valor a ser depositado >>> ",
    txtValorTransferencia: "Digite o valor a ser transferido >>> ",
    // Encerramento
    txtApertarEnter: "aperte enter p/ continuar...\n".toUpperCase(),
    txtAppEncerrada: "\n========== Aplicação encerrada ==========",
    // Títulos de apresentação
    txtCadastrar: `\n========== ${"Cadastro de conta".toUpperCase()} ==========`,
    txtConsultar: `\n========== ${"Consulta de conta".toUpperCase()} ==========`,
    txtSacar: `\n========== ${"Saque em conta".toUpperCase()} ==========`,
    txtDepositar: `\n========== ${"Depósito em conta".toUpperCase()} ==========`,
    txtRemover: `\n========== ${"Remoção de conta".toUpperCase()} ==========`,
    txtTransferir: `\n========== ${"Transferência de valores entre contas".toUpperCase()} ==========`,
    // Positivas
    txtContaCadastrada: "O cadastro da sua conta foi efetuada!",
    txtContaReceptora: "Digite o número da conta a receber >>> ",
    txtContaProvedora: "Digite o número da conta a fornecer >>> ",
    txtSaldoEfetivado: "Saldo efetuado com sucesso!",
    // Negativas
    txtContaRepetida: "O id da conta fornecido já existe no banco!",
    txtContaInexistente: "Conta não registrada ao banco!",
    txtTransferenciaValida: "Sua transferência foi aceita!",
    txtSaldoInvalido: "Saldo insuficiente!",
    txtContaRemovida: "A conta escolhida foi removido do banco!"
}

do {
    console.clear()
    menu()
    opcao = entrada(msgs['txtOperacao']);
    
    switch (opcao) {
        case "1":
            inserir()
            break
        case "2":
            consultar()
            break
        case "3":
            sacar()
            break
        case "4":
            depositar()
            break
        case "5":
            excluir()
            break
        case "6":
            transferir()
            break
    }
    
    entrada(msgs['txtApertarEnter']);
    } while (opcao != "0")
    
    console.log(msgs['txtAppEncerrada'])

    // Auxiliares
    function requisitarIdConta() {
        return entrada("Digite o número da conta >>> ")
    }

    function valorTipoMoeda(valor: number): string {
        return `RS ${valor.toFixed(2)}`
    }

    // Principais
    function inserir(): void {
        console.log(msgs['txtCadastrar'])
        let idConta: string = requisitarIdConta()
        const conta: Contav2 = new Contav2(idConta, 0)
        banco.inserir(conta)
    }

    function consultar(): void {
        console.log(msgs['txtConsultar']);
        let idConta: string = requisitarIdConta()
        const contaExiste = banco.consultar(idConta)
        
        if (contaExiste.numero != "0") {
            console.log(`Conta encontrada:\n    status: ativa\n    id: ${contaExiste.numero}\n    saldo: ${valorTipoMoeda(contaExiste.saldo)}`)
        } else {
            console.log(msgs['txtContaInexistente'])
        }
    }

    function sacar(): void {
        console.log(msgs['txtSacar'])
        let idConta: string = requisitarIdConta()
        // Allow second input in order to avoid code repetition
        let valorSaque: number = Number(entrada(msgs['txtValorSaque']))
        // In here, it is known if account exists and withdraw is possible
        banco.sacar(idConta, valorSaque) 
    }

    function depositar(): void {
        console.log(msgs['txtDepositar'])
        let idConta: string = requisitarIdConta()
        // Allow second input in order to avoid code repetition
        let valorDepositado: number = Number(entrada(msgs['txtValorDeposito']))
        // In here, it is known if account exists and storage is possible
        banco.depositar(idConta, valorDepositado)
    }
    
    function excluir(): void {
        console.log(msgs['txtRemover'])
        const idConta = requisitarIdConta()
        banco.excluir(idConta)
    }

    function transferir(): void {
        console.log(msgs['txtTransferir'])
        
        // Allow all inputs to be filled in order to avoid code repetition
        let idContaReceptora = entrada(msgs['txtContaReceptora'])
        let idContaProvedora = entrada(msgs['txtContaProvedora'])
        let valor = Number(entrada(msgs['txtValorTransferencia']))
        
        // This function will tell if transfering is possible
        banco.transferir(idContaReceptora, idContaProvedora, valor)
    }
