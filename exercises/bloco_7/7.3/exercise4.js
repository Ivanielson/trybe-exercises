const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
console.log(myFizzBuzz(15));
console.log(myFizzBuzz(9));
console.log(myFizzBuzz(10));
console.log(myFizzBuzz(2));
console.log(myFizzBuzz('15'));