"use strict";
class Postagem {
    constructor(id, texto, quantidadeCurtidas) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }
    curtir() {
        this.quantidadeCurtidas++;
    }
    toString() {
        let cadaPalavra = "";
        let postagemLista = this.texto.split(" ");
        for (let i = 0; i < postagemLista.length; i++) {
            if (i % 15 == 0) {
                cadaPalavra += '\n';
            }
            cadaPalavra += postagemLista[i] + " ";
        }
        return cadaPalavra + `\n\nCurtidas: ${this.quantidadeCurtidas}`;
    }
}
class Microblog {
    constructor(postagens) {
        /* Questão 2 - letra A
            Crie um array de classes Postagem;
        */
        this.postagens = [];
        this.postagens = postagens;
    }
    /* Questão 2 - letra B
        Crie um método que inclua uma postagem passada como
        parâmetro no array de postagens;
    */
    incluir(postagem) {
        if (postagem.texto.length != 0) {
            this.postagens.push(postagem);
        }
    }
    /* Questão 2 - letra C
        Crie um método de excluir uma postagem que recebe um id
        passado por parâmetro. Para isso, efetue uma busca pelo id nas
        postagens do array e faça a exclusão de forma análoga à feita na
        classe Banco;
    */
    excluir(id) {
        for (let i = 0; i < this.postagens.length; i++) {
            id == this.postagens[i].id ? this.postagens.splice(i, 1) : null;
        }
    }
    /* Questão 2 - letra D
        Crie um método que retorna a postagem mais curtida;
    */
    maisCurtida() {
        return this.postagens.reduce((atual, prox) => {
            return atual.quantidadeCurtidas > prox.quantidadeCurtidas ? atual : prox;
        });
    }
    /* Questão 2 - letra E
        Crie um método curtir em que se passa um id como parâmetro e a
        classe microblog pesquisa a postagem e chama seu método curtir
        da própria postagem;
    */
    curtir(id) {
        for (let i = 0; i < this.postagens.length; i++) {
            if (id == this.postagens[i].id) {
                console.log(`Curtidas da postagem ${this.postagens[i].id} (ANTES): ${this.postagens[i].quantidadeCurtidas}`);
                this.postagens[i].curtir();
                console.log(`Curtidas da postagem ${this.postagens[i].id} (DEPOIS): ${this.postagens[i].quantidadeCurtidas}`);
            }
        }
    }
}
function valor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
const posts = [];
const blog = new Microblog(posts);
const txtA = "My tea has gone cold and I wonder why, got out of bed at all, the morning ray clouds up my window, and I cannot see at all, and even if I could it would all be grey, but your picture on my wall, it reminds me that it is not so bad, it is not so bad.";
const txtB = "Because it is too cold for your here, and now, so let me hold, both your hands in the holes of my sweater.";
const txtC = "Take me, to the magic of the moment, on the glory night, where the children of tomorrow dream away, in the wind of change.";
const postA = new Postagem(1, txtA, valor(1, 1000000));
const postB = new Postagem(2, txtB, valor(1, 1000000));
const postC = new Postagem(3, txtC, valor(1, 1000000));
blog.incluir(postA);
blog.incluir(postB);
blog.incluir(postC);
console.log(blog.postagens);
blog.excluir(3);
console.log(blog.postagens);
console.log(blog.maisCurtida().id);
blog.curtir(postA.id);
