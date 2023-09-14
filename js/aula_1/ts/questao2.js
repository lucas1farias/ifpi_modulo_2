"use strict";
/*
    2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um exemplo de objeto que possua
    atributos e métodos (notação livre).
*/
class Bandeira {
    constructor(pais, cores) {
        this.pais = pais;
        this.cores = cores;
    }
    /*
        Métodos são ações que usam os atributos para alcançar alguma finalidade
        Neste caso, um método acessa o atributo "cores" afim de alterar uma das cores da bandeira
    */
    alterarCor(cor, novaCor) {
        for (let i = 0; i < this.cores.length; i++) {
            if (this.cores[i] == cor) {
                this.cores[i] = novaCor;
            }
        }
    }
}
const brasil = new Bandeira("Brasil", ["amarelo", "azul", "branco", "verde"]);
console.log(brasil.pais);
console.log(brasil.cores);
brasil.alterarCor("amarelo", "laranja");
console.log(brasil.cores);
