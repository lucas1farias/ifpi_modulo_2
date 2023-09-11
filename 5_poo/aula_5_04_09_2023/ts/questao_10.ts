

/*
10. Crie uma classe chamada Jogador e nela:
    • Crie 3 atributos inteiros representando força, nível e pontos atuais;
    
    • Crie um construtor no qual os 3 parâmetros são passados e inicialize os
      respectivos atributos;
    
    • Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
      multiplicação de força pelo nível. Esse resultado é o dano de ataque do
      jogador;
    
    • Crie um método chamado atacar em que é passado um outro jogador
      (atacado) como parâmetro. Nele e é feita a subtração do dano (método
      calcularAtaque) dos pontos do atacado;
    
    • Crie um método chamado estaVivo que retorna true caso o atributo pontos
      do jogador seja maior que zero e falso caso contrário.
    
    • Altere o método atacar para usar o método está vivo e desconsiderar a
      operação, ou seja, não atacar, caso o jogador passado por parâmetro não
      esteja vivo.
    
    • Crie um método chamado toString() que retorna a representação textual do
      produto concatenando todos os seus atributos.
    
    • Avalie em com testes dois jogadores instanciados e inicializados através do
      construtor. Utilize o método de ataque de cada jogador e ao final, verifique
      qual jogador tem mais pontos.
*/

class Jogador {
    classe: string
    forca: number
    nivel: number
    pontosAtuais: number
    baseHp: number

    constructor(classe:string, forca: number, nivel: number, pontosAtuais: number) {
        this.classe = classe
        this.forca = forca
        this.nivel = nivel
        this.pontosAtuais = pontosAtuais
        this.baseHp = this.pontosAtuais
    }

    calcularAtaque() {
        return this.forca * this.nivel
    }

    atacar(oponente: Jogador) {
        if (this.estaVivo()) {
            let dano = this.calcularAtaque() 
            oponente.pontosAtuais = oponente.pontosAtuais - dano
            console.log(`${this.classe} ataca [dano: ${dano.toFixed(2)}]`)
        } else {
            console.log("\nNão pode atacar")
        }
    }
    
    estaVivo() {
        return this.pontosAtuais > 0 ? true : false
    }

    toString() {
        return `STR: ${this.forca.toFixed(1)}    LVL: ${this.nivel}    HP: ${this.pontosAtuais.toFixed(2)}`
    }

    subirNivel() {
        this.nivel++
        this.subirForca()
        this.subirHp()
    }

    subirForca() {
        if (this.classe == "Guerreiro") {
            this.forca += 2
        } else if (this.classe == "Espadachim") {
            this.forca += 1.4
        }
    }

    subirHp() {
        if (this.classe == "Guerreiro") {
            this.pontosAtuais = this.nivel * this.baseHp // encher HP
            this.pontosAtuais += 40                      // Bônus por evoluir
        } else if (this.classe == "Espadachim") {
            this.pontosAtuais = this.nivel * this.baseHp
            this.pontosAtuais += 25
        }
    }
}

function valorAleatorio(min: number, max:number): number {
    return Math.floor(Math.random() * (max - min) + min)
}

function exibirRodadaInfos(jogadorA: Jogador, jogadorB: Jogador, contador: number): void {
    console.log(`\n========== Rodada ${contador} ==========`)
    console.log(`${jogadorA.classe} está vivo? ${jogadorA.estaVivo() ? `sim, HP=${jogadorA.pontosAtuais.toFixed(2)}` : 'não'}`)
    console.log(`${jogadorB.classe} está vivo? ${jogadorB.estaVivo() ? `sim, HP=${jogadorB.pontosAtuais.toFixed(2)}` : 'não'}\n`)
}

function iniciarAtaques(jogadorA: Jogador, jogadorB: Jogador): void {
    // Nível do guerreiro for maior
    if (jogadorA.nivel > jogadorB.nivel) {
        jogadorA.atacar(jogadorB)
        jogadorB.atacar(jogadorA)
    } 
    // Nível do espadachim maior
    if (jogadorB.nivel > jogadorA.nivel) {
        jogadorB.atacar(jogadorA)
        jogadorA.atacar(jogadorB)
    } 
    // Decisão aleatória por conta de empate
    if (jogadorA.nivel == jogadorB.nivel) {
        let sorte = valorAleatorio(0, 1) 
        
        if (sorte == 0) {
            jogadorA.atacar(jogadorB)
            console.log(`${jogadorA.classe} atacou ${jogadorB.classe}\n`)
            jogadorB.atacar(jogadorA)
            console.log(`${jogadorB.classe} atacou ${jogadorA.classe}\n`)
        } else {
            jogadorB.atacar(jogadorA)
            console.log(`${jogadorB.classe} atacou ${jogadorA.classe}\n`)
            jogadorA.atacar(jogadorB)
            console.log(`${jogadorA.classe} atacou ${jogadorB.classe}\n`)
        }
    }
}

function elevarNivel(jogadorA: Jogador, jogadorB: Jogador, valorRef: number) {
    // Quem subirá o nível
    console.log("\n--------------------> QUEM SUBIU NÍVEL?")
    if (valorRef == 1 || valorRef == 3 || valorRef == 5 || valorRef == 7) {
        jogadorB.subirNivel()
        console.log(`    ${jogadorB.classe.toUpperCase()}\n`)
    } if (valorRef == 2 || valorRef == 4 || valorRef == 6) {
        jogadorA.subirNivel()
        console.log(`    ${jogadorA.classe.toUpperCase()}\n`)
    }
}

function exibirDadosAtualizados(jogadorA: Jogador, jogadorB: Jogador) {
    console.log("\n========== RELATÓRIO ==========")
    console.log(jogadorA.toString())
    console.log(jogadorB.toString())
}

function exibirResultado(jogadorA: Jogador, jogadorB: Jogador) {
    console.log("\n\n========== RESULTADO DO PVP ==========")
    if (jogadorA.pontosAtuais > jogadorB.pontosAtuais) {
        console.log(jogadorA.toString())
        console.log(`${jogadorA.classe} venceu, restando ${jogadorA.pontosAtuais.toFixed(2)} de HP`)
    } 
    else if (jogadorA.pontosAtuais < jogadorB.pontosAtuais) {
        console.log(jogadorB.toString())
        console.log(`${jogadorB.classe} venceu, restando ${jogadorB.pontosAtuais.toFixed(2)} de HP`)
    } 
    else {
        console.log("Empate")
    }
}

let rodadas: number = 0
const guerreiro: Jogador = new Jogador("Guerreiro", 2, 1, 120)
const espadachim: Jogador = new Jogador("Espadachim", 1.7, 1, 95)

while (guerreiro.estaVivo() && espadachim.estaVivo()) {
    let chanceSubirNivel = valorAleatorio(1, 20)

    exibirRodadaInfos(guerreiro, espadachim, rodadas)
    iniciarAtaques(guerreiro, espadachim)
    elevarNivel(guerreiro, espadachim, chanceSubirNivel)
    exibirDadosAtualizados(guerreiro, espadachim)
    
    rodadas++
}

exibirResultado(guerreiro, espadachim)
