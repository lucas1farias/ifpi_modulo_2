

import { EmployeeV2 } from "../cls/bdd";

const saleswoman: EmployeeV2 = new EmployeeV2("Ana", "Maria", "", "111-1", 1500)

console.log(saleswoman.calculateFirstSalaryMontant())
console.log(saleswoman.calculateSecondtSalaryMontant())
