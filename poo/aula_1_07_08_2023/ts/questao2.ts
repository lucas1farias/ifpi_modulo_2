

/* 
    2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um exemplo de objeto que possua 
    atributos e métodos (notação livre).
*/

class Bandeira {
    /*
        Atributos são características genéricas de um objeto criado a partir de uma classe
        Sendo assim, atributos são características em comum entre todos os objetos de uma classe
    */
    public pais: string
    public cores: string[]

    constructor(pais: string, cores: string[]) {
        this.pais = pais
        this.cores = cores
    }
    
    /*
        Métodos são ações que usam os atributos para alcançar alguma finalidade
        Neste caso, um método acessa o atributo "cores" afim de alterar uma das cores da bandeira
    */
    alterarCor(cor: string, novaCor: string): void {
        for (let i = 0; i < this.cores.length; i++) {
            if (this.cores[i] == cor) {
                this.cores[i] = novaCor
            }
        }
    }
}

const brasil = new Bandeira("Brasil", ["amarelo", "azul", "branco", "verde"])
console.log(brasil.pais)
console.log(brasil.cores)
brasil.alterarCor("amarelo", "laranja")
console.log(brasil.cores)
