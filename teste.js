

function valorAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

for (let i = 0; i < 20; i++) {
    console.log(valorAleatorio(0, 2))
}
