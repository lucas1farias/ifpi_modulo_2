

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
    txtValorTransferencia: "Digite o valor a ser transferido >>>",
    // Encerramento
    txtApertarEnter: "aperte enter p/ continuar...\n".toUpperCase(),
    txtAppEncerrada: "\n========== Aplicação encerrada ==========",
    // Títulos de apresentação
    txtCadastrar: `\n========== ${"Cadastro de conta".toUpperCase()} ==========`,
    txtConsultar: `\n========== ${"Consulta de conta".toUpperCase()} ==========`,
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

    function requisitarIdConta() {
        return entrada("Digite o número da conta >>> ")
    }

    function valorTipoMoeda(valor: number): string {
        return `RS ${valor.toFixed(2)}`
    }

    function confirmarExistencia(conta: Contav2): void {
        console.log(`\nVerificamos, sua conta ${conta.numero} existe`)
        console.log(`Saldo atual: ${valorTipoMoeda(conta.saldo)}`)
    }

    function confirmarNovoSaldo(conta: Contav2): void {
        console.log(`Saldo após o depósito: ${valorTipoMoeda(conta.saldo)}`) 
    }

    function ehConta(entrada: string): Contav2 | boolean {
        for (let i = 0; i < banco.contas.length; i++) {
            if (entrada == banco.contas[i].numero) {
                return banco.contas[i]
            }        
        }
        return false
    }

    function saqueValido(conta: Contav2, valor: number): boolean {
        return conta.saldo >= valor
    }
    
    // Principais
    function inserir(): void {
        console.log(msgs['txtCadastrar'])
        let idConta: string = requisitarIdConta()
        const conta: Contav2 = new Contav2(idConta, 0)

        if (banco.contas.length != 0) {
            for (let i = 0; i < banco.contas.length; i++) {
                if (idConta == banco.contas[i].numero) {
                    console.log([1], msgs['txtContaRepetida'])
                    break
                } else {
                    banco.contas.push(conta)
                    console.log([2], msgs['txtContaCadastrada'])
                    break
                }
            }
        } else {
            banco.contas.push(conta)
            console.log(msgs['txtContaCadastrada'])
        }
    }

    function consultar(): void {
        console.log(msgs['txtConsultar']);
        let idConta: string = requisitarIdConta()
        const contaExiste = ehConta(idConta)
        
        if (contaExiste instanceof Contav2) {
            console.log(`Conta encontrada:\n    status: ativa\n    id: ${contaExiste.numero}\n    saldo: ${valorTipoMoeda(contaExiste.saldo)}`)
        } else {
            console.log(msgs['txtContaInexistente'])
        }
    }

    function sacar(): void {
        let idConta: string = requisitarIdConta()
        const contaExiste = ehConta(idConta)
        if (contaExiste instanceof Contav2) {
            let valorSaque: number = Number(entrada(msgs['txtValorSaque']))
            
            if (saqueValido(contaExiste, valorSaque)) {
                contaExiste.saldo -= valorSaque
                console.log(msgs['txtSaldoEfetivado'])
            } else {
                console.log(msgs['txtSaldoInvalido'])
            }
        }
    }

    function depositar(): void {
        let idConta: string = requisitarIdConta()
        const contaExiste = ehConta(idConta)
            
        if (contaExiste instanceof Contav2) {
            confirmarExistencia(contaExiste)
            let valorDepositado: number = Number(entrada(msgs['txtValorDeposito']))
            contaExiste.saldo = valorDepositado
            confirmarNovoSaldo(contaExiste)
        } else {
            console.log(msgs['txtContaInexistente'])
        } 
    }
    
    function excluir(): void {
        console.log(msgs['txtRemover'])
        let idConta = requisitarIdConta()
        
        for (let i = 0; i < banco.contas.length; i++) {
            if (idConta == banco.contas[i].numero) {
                banco.contas.splice(i, 1)
                console.log(msgs['txtContaRemovida'])
            }
            else {
                console.log(msgs['txtContaInexistente'])
            }
        }
    }

    function transferir(): void {
        console.log(msgs['txtTransferir'])
        
        let idContaReceptora = entrada(msgs['txtContaReceptora'])
        const contaReceptoraExiste = ehConta(idContaReceptora)
        let idContaProvedora = entrada(msgs['txtContaProvedora'])
        const contaProvedoraExiste = ehConta(idContaProvedora)
        
        if (contaReceptoraExiste instanceof Contav2 && contaProvedoraExiste instanceof Contav2) {
            let valorTransferencia = Number(entrada(msgs['txtValorTransferencia']))
            
            if (contaProvedoraExiste.saldo >= valorTransferencia) {
                console.log(msgs['txtTransferenciaValida'])
                contaProvedoraExiste.saldo -= valorTransferencia
                contaReceptoraExiste.saldo += valorTransferencia
            } else {
                console.log(msgs['txtSaldoInvalido'])
            }
        }
    }
