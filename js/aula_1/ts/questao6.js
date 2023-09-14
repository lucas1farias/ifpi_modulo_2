"use strict";
/*
    6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais características
    (atributos) e comportamentos (métodos) que os mesmos poderiam ter.
*/
class Personagem {
    constructor(nome, classe, hp, mp, moedas, img) {
        this.nome = nome;
        this.classe = classe;
        this.hp = hp;
        this.mp = mp;
        this.moedas = moedas;
        this.img = img;
    }
    mudarFrame() { }
    pular() { }
    gravidade() { }
    mover() { }
    animar() { }
}
class Inimigo {
    constructor(id, nome, img, hp, mp) {
        this.id = id;
        this.nome = nome;
        this.img = img;
        this.hp = hp;
        this.mp = mp;
    }
    animar() { }
    mover() { }
}
class Cenario {
    constructor(id, nome, img) {
        this.id = id;
        this.nome = nome;
        this.img = img;
    }
    deslocar() { }
}
class Item {
    constructor(id, nome, img) {
        this.id = id;
        this.nome = nome;
        this.img = img;
    }
    negociar() { }
}
