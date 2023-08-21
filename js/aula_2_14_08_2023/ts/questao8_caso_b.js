"use strict";
// allowUnreachableCode
function detectarHoraMilitar(h) {
    if (h > 12) {
        return true;
    }
    else {
        return false;
    }
    // Onde está o código inalcançável, porém permitido pela nova configuração
    return true;
}
const hora = 17;
console.log(detectarHoraMilitar(hora));
