let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result;

for (let index = 0; index < numbers.length; index += 1) {
  if(result === undefined){
    result = numbers[index];
  }else if(result > numbers[index]){
    result = numbers[index];
  }
  
}
console.log(result);

//Outra alternativa utilizando a função Math.min();

console.log(Math.min(...numbers));