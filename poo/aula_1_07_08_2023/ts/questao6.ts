

/* 
    6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais características 
    (atributos) e comportamentos (métodos) que os mesmos poderiam ter.
*/

class Personagem {
    public nome: string
    public classe: string
    public hp: number
    public mp: number
    public moedas: number
    public img: string
    
    constructor(nome: string, classe: string, hp: number, mp: number, moedas: number, img: string) {
        this.nome = nome
        this.classe = classe
        this.hp = hp
        this.mp = mp
        this.moedas = moedas
        this.img = img
    }

    mudarFrame(): void{}

    pular(): void{}

    gravidade(): void{}

    mover(): void{}

    animar(): void{}
}

class Inimigo {
    public id: number
    public nome: string
    public img: string
    public hp: number
    public mp: number
    
    constructor(id: number, nome: string, img: string, hp: number, mp: number) {
        this.id = id
        this.nome = nome
        this.img = img
        this.hp = hp
        this.mp = mp
    }

    animar(): void {}

    mover(): void {}
}

class Cenario {
    public id: number
    public nome: string
    public img: string
    
    constructor(id: number, nome: string, img: string) {
        this.id = id
        this.nome = nome
        this.img = img
    }

    deslocar(){}
}

class Item {
    public id: number
    public nome: string
    public img: string
    
    constructor(id: number, nome: string, img: string) {
        this.id = id
        this.nome = nome
        this.img = img
    }

    negociar(): void {}
}
