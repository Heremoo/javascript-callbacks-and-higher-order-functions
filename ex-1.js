// Exercise #1: For Each Function

// function forEach(array, operation)


const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here

function raiseSalaries (salaries,raise) {
  return salaries + raise
}

function newSalaries (operation, array, num) {
  for (let i = 0; i < array.length; i++) {
  newEmployeeSalaries.push(operation(array[i], num))
  }
return newEmployeeSalaries
} 

let newSalariesForEach = newSalaries(raiseSalaries,employeeSalaries,5000)
console.log(newSalariesForEach); 