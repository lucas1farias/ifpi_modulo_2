

import {PaymentSheet, Person, EmployeeV2, Professor} from "../cls/bdd"

// (parte 5) Note que você deve considerar o salário apenas de funcionários e professores.
const employess: Person[] = [
    new EmployeeV2("Ana", "Maria", "", "111-1", 1000),
    new Professor("Ena", "Maria", "", "222-2", 1100, "bacharel"),
    new EmployeeV2("Ina", "Maria", "", "333-3", 1200),
    new Professor("Ona", "Maria", "", "444-4", 1300, "graduação"),
    new EmployeeV2("Una", "Maria", "", "555-5", 1400),
    
]

const arrayEmployees: PaymentSheet = new PaymentSheet(employess)
console.log("========== TESTE QUESTÃO 5 ==========")
console.log(`Acumulado dos salários: R$ ${(<EmployeeV2>arrayEmployees.calculatePayments()).salary}`)
