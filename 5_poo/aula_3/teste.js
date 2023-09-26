

// Função auxiliar
function value(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Função auxiliar
function range(min, max) {
    const array = []
    for (let i = min; i < max; i++) {
        array.push(i)
    }
    return array
}

// Função auxiliar
function randomSum() {
    const numbers = range(1, 10)
    const v1 = value(0, numbers.length)
    const v2 = value(0, numbers.length)
    return `Soma de ${v1} + ${v2} = ${v1 + v2}`
}

/* Função principal
   Ela mesma se usa de forma recursiva
   Um tempo é definido fora do "setTimeout", permitindo que cada exec. tenha um tempo variado
   As funções que se quer usar são aplicadas ao escopo de "setTimeout"
   Sendo assim, essa função não é dinâmica, pois pode haver muitas funções a serem aplicadas
   Se elas tiverem parâmetros, todos eles teriam que ser parâmetros de "execInterval", o que a torna inviável
   Portanto, ela é usada em contextos gerais com funções que tenham parâmetros passáveis de forma direta 
*/
function execInterval() {
    const numbers = range(1, 6)
    let timer = value(1, numbers.length)
    
    setTimeout(() => {
        console.log(randomSum())
        execInterval()
    }, timer * 1000)
}

execInterval()
