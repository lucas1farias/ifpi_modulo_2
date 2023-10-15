

import {Stock, Product, PerishableProduct} from "../cls/bdd"

const products: Product[] = []
const productStorage: Stock = new Stock(products)

const spoon: Product = new Product(1, "Colher de alumínio", 5, 6.50)
const meat: PerishableProduct = new PerishableProduct(2, "Carne bovina", 10, 20.50, "20/10/2023") // will become expired
const lettuce: PerishableProduct = new PerishableProduct(3, "Alface verde", 25, 7, "01/11/2023")  // will become expired

/*
    . Items must not be expired on instance creation
    . Reason? they will not be appended to the list, because there are functions that prevent it
*/
productStorage.insert(spoon)
productStorage.insert(meat)
productStorage.insert(lettuce)

console.log("================================================== TESTES ==================================================")
console.log("\n========== COLHER: PRODUTO NÃO PERECÍVEL ==========")
console.log([1], "Inicialmente possui estoque: ", spoon.getAmount())
productStorage.includeStock(spoon.getIdentifier(), 2)
console.log([2], "Estoque aumentado em 2, indo para:", spoon.getAmount())
productStorage.includeStock(spoon.getIdentifier(), 7)
console.log([3], "Estoque aumentado em 7, indo para:", spoon.getAmount())

console.log("\n========== CARNE: PRODUTO PERECÍVEL ==========")
console.log([1], "Inicialmente possui estoque: ", meat.getAmount())
console.log([2], "Validade registrada: ", meat.getExpireDate())
productStorage.includeStock(meat.getIdentifier(), 10)
console.log([3], "Estoque aumentado em 10, indo para:", meat.getAmount())
// "meat" becomes expired
console.log([4], "ALTERAÇÃO DA VALIDADE DE 'meat' PARA: ", meat.setExpireDate("12/10/2023"))
console.log([5], "Validade modificada: ", meat.getExpireDate())
productStorage.includeStock(meat.getIdentifier(), 5)
console.log([6], `Estoque se mantêm ${meat.getAmount()} (é pra ser 20), pois a data de validade está abaixo do dia atual`)

console.log("========== LISTAGEM DE PRODUTOS PERECÍVEIS ==========")
// "lettuce" becomes expired
console.log("ALTERAÇÃO DA VALIDADE DE 'lettuce' PARA: ", lettuce.setExpireDate("12/10/2023"))
console.log(productStorage.listPerishableProducts())
