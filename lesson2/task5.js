function averageSalary(array) {
  numbers = array.map(item => item.salary)
  result = numbers.reduce((a, b) => a + b)/numbers.length
  console.log(result)
}

function sortBySalary(array) {
  result = array.sort((a, b) => a.salary - b.salary )
  console.log(result)
}

function filterBySalaryAndAge(array) {
  result = array.filter(item => item.age > 25 && item.salary > 4500)
  console.log(result)
}

const employees = [
  {
   firstName: 'Alex',
   lastName: 'Smith',
   age: 54,
   salary: 10000,
   position: 'Architect'
  },
  {
   firstName: 'Gustav',
   lastName: 'Andersen',
   age: 31,
   salary: 5000,
   position: 'Softwar engineer'
  },
  {
   firstName: 'Liz',
   lastName: 'Taylor',
   age: 20,
   salary: 7000,
   position: 'Manager'
  }
]

averageSalary(employees)
sortBySalary(employees)
filterBySalaryAndAge(employees)
