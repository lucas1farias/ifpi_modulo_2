

/* 
  3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser
     problemático.
*/

// JS permite somar dados incompatíveis, seu interpretador "tenta" dar sentido às inconsistências
function somarMuitos(colecao) {
    let acumulador = 0;
    for (let i = 0; i < colecao.length; i++) {
        acumulador += colecao[i]
    }
    return acumulador
}

console.log(somarMuitos([7, true, 3, false, "", "11"]))
