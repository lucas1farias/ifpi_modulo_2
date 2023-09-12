"use strict";
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
    constructor(classe, forca, nivel, pontosAtuais) {
        this.classe = classe;
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
        this.baseHp = this.pontosAtuais;
    }
    calcularAtaque() {
        const multiplicador = this.execDanoCritico();
        const chance = valorAleatorio(0, 2);
        // Efetua dano comum em 0 e crítico em 1
        return chance == 0 ? (this.forca * this.nivel) : (this.forca * this.nivel) * multiplicador;
    }
    atacar(oponente) {
        if (this.estaVivo()) {
            let dano = this.calcularAtaque();
            oponente.pontosAtuais = oponente.pontosAtuais - dano;
            console.log(`${this.classe} ataca [dano: ${dano.toFixed(2)}]`);
        }
        else {
            console.log(`\n${this.classe} não pode atacar, pois foi derrotado!`);
        }
    }
    estaVivo() {
        return this.pontosAtuais > 0 ? true : false;
    }
    toString() {
        return `CLS: ${this.classe}    STR: ${this.forca.toFixed(1)}    LVL: ${this.nivel}    HP: ${this.pontosAtuais.toFixed(2)}`;
    }
    subirNivel() {
        this.nivel++;
        this.subirForca();
        this.subirHp();
    }
    subirForca() {
        this.classe == "Guerreiro" ? this.forca += 2 : null;
        this.classe == "Espadachim" ? this.forca += 1.4 : null;
    }
    restaurarHp() {
        this.pontosAtuais = this.nivel * this.baseHp; // encher HP
    }
    bonusStatus() {
        this.classe == "Guerreiro" ? this.pontosAtuais += 40 : null;
        this.classe == "Espadachim" ? this.pontosAtuais += 25 : null;
    }
    subirHp() {
        this.restaurarHp();
        this.bonusStatus();
    }
    execDanoCritico() {
        const variacoes = [1.5, 1.8, 2.1, 2.4, 2.7, 3.0, 3.3];
        return variacoes[valorAleatorio(0, variacoes.length)];
    }
}
function valorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function exibirRodadaInfos(jogadorA, jogadorB, contador) {
    console.log(`\n==================== Rodada ${contador} ====================`);
    console.log(`${jogadorA.classe} está vivo? ${jogadorA.estaVivo() ? `sim, HP=${jogadorA.pontosAtuais.toFixed(2)}` : 'não'}`);
    console.log(`${jogadorB.classe} está vivo? ${jogadorB.estaVivo() ? `sim, HP=${jogadorB.pontosAtuais.toFixed(2)}` : 'não'}\n`);
}
function iniciarAtaques(jogadorA, jogadorB) {
    // Nível do guerreiro for maior
    if (jogadorA.nivel > jogadorB.nivel) {
        jogadorA.atacar(jogadorB);
        jogadorB.atacar(jogadorA);
    }
    // Nível do espadachim maior
    if (jogadorB.nivel > jogadorA.nivel) {
        jogadorB.atacar(jogadorA);
        jogadorA.atacar(jogadorB);
    }
    // Decisão aleatória por conta de empate
    if (jogadorA.nivel == jogadorB.nivel) {
        let sorte = valorAleatorio(0, 2);
        if (sorte == 0) {
            jogadorA.atacar(jogadorB);
            jogadorB.atacar(jogadorA);
        }
        else {
            jogadorB.atacar(jogadorA);
            jogadorA.atacar(jogadorB);
        }
    }
}
function elevarNivel(jogadorA, jogadorB, valorRef) {
    // Quem subirá o nível
    if (jogadorA.estaVivo() && valorRef == 2 || valorRef == 4 || valorRef == 6) {
        jogadorA.subirNivel();
        console.log(`\n-----> ${jogadorA.classe.toUpperCase()} alcançou o nível ${jogadorA.nivel}`);
    }
    if (jogadorB.estaVivo() && valorRef == 1 || valorRef == 3 || valorRef == 5 || valorRef == 7) {
        jogadorB.subirNivel();
        console.log(`\n-----> ${jogadorB.classe.toUpperCase()} alcançou o nível ${jogadorB.nivel}`);
    }
}
function exibirDadosAtualizados(jogadorA, jogadorB) {
    console.log("\n--------------------o RELATÓRIO");
    console.log(jogadorA.toString());
    console.log(jogadorB.toString());
}
function exibirResultado(jogadorA, jogadorB, qtdRodadas) {
    console.log("\n\n========== RESULTADO DO PVP ==========");
    if (jogadorA.pontosAtuais > jogadorB.pontosAtuais) {
        console.log(`${jogadorA.classe} venceu em ${qtdRodadas} rodada(s), restando ${jogadorA.pontosAtuais.toFixed(2)} de HP`);
    }
    else if (jogadorA.pontosAtuais < jogadorB.pontosAtuais) {
        console.log(`${jogadorB.classe} venceu em ${qtdRodadas} rodada(s), restando ${jogadorB.pontosAtuais.toFixed(2)} de HP`);
    }
    else {
        console.log("Empate");
    }
    console.log('\n');
}
let rodadas = 1;
/*
  O guerreiro têm maior força e hp base, assim como seus bônus são maiores
  A vantagem do espadachim é ter maior possibilidade de elevar nível, o que o possibilita escalar dano
*/
const guerreiro = new Jogador("Guerreiro", 2, 1, 100);
const espadachim = new Jogador("Espadachim", 1.5, 1, 65);
while (guerreiro.estaVivo() && espadachim.estaVivo()) {
    // Aqui é onde o espadachim pode obter sua vantagem (1 chance a + de upar em relação ao Guerreiro)
    let chanceSubirNivel = valorAleatorio(1, 20);
    exibirRodadaInfos(guerreiro, espadachim, rodadas);
    iniciarAtaques(guerreiro, espadachim);
    elevarNivel(guerreiro, espadachim, chanceSubirNivel);
    exibirDadosAtualizados(guerreiro, espadachim);
    rodadas++;
}
exibirResultado(guerreiro, espadachim, rodadas - 1);
