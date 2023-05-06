//Given an array of strings, use a function to reverse all the elements in the
//string in ascending order and the specific elements in descending order
function arrayOfSrg (srg){
  
        srg.reverse()
        const srg2 = [0, 2];
      srg2.forEach((i) => {
        if (srg[i]) {
          srg[i] = srg[i].split('').reverse().join('');
        }
      });
      return srg;
    }
    console.log(arrayOfSrg(["Emmily","web developer","Nigeria"]));




//Given an array of objects, each object representing a person with a name and age property, write a 
//function that returns the sum of all people who are less than 18 years.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
function sumOfages (people){
    let sum = people.reduce((total,person)=>{
        if (person.age < 18){
            return total + person.age;
        }else{
            return total;
        }
    } ,0);
    return sum;
}
let sum =sumOfages(people);
console.log(sum)

//Using JS functions and an array of numbers, return positive if an element within the array is positive, 
//negative if an element is negative, else zero
function signs(arr) {
    let positive = arr.some((num) => num > 0);
    let negative = arr.some((num) => num < 0);
  
    if (positive && !negative) {
      return "positive";
    } else if (!positive && negative) {
      return "negative";
    } else {
      return "zero";
    }
  }
  let arr = [1,2,3,4]
  let arry = [1,-2,3,4]
  let array = [0,0,0]

  console.log(signs(arr));
  console.log(signs(arry));
  console.log(signs(array));


  //Given an array of objects, where each object represents an employee with an id, name, and salary property,
  // write a function that returns a new array of employee objects sorted by their salary in ascending order.

  function employeesSalary(employees) {
    return employees.sort((a, b) => a - b);
  }
  let employees = [
    { id: 1, name: 'Emmie', salary: 10000 },
    { id: 2, name: 'John', salary: 705000},
    { id: 3, name: 'Cynthia', salary: 504000},
    { id: 4, name: 'Ann', salary: 454500 },
  ];
  
  let sortedEmployees = employeesSalary(employees);
  
  console.log(sortedEmployees);