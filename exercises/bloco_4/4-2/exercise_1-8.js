let numbers = [];
for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);  
}
console.log(numbers);

// Outra alternativa:

let numb = [];
for (let index = 1; index <= 25; index += 1) {
  numb.push(index);
  console.log(numb[index-1]);
}