

import { Employee, Diarist, HourlyDiarist } from "../cls/bdd";

const diarist: Employee = new Employee()
const jobDiarist: Diarist = new Diarist()
const hourJobDiarist: HourlyDiarist = new HourlyDiarist()

console.log(diarist.calculateSalary())
console.log(jobDiarist.calculateSalary())
console.log(hourJobDiarist.calculateSalary())
