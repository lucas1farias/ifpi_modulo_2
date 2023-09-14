

/* 
  3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser
     problemático.
*/

function somarMuitos(colecao: any[]) {
    let acumulador = 0;
    for (let i = 0; i < colecao.length; i++) {
        acumulador += colecao[i]
    }
    return acumulador
}

console.log(somarMuitos([7, true, 3, false, "", "10"]))
