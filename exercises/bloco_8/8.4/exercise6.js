const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// Referência -> Source: https://stackoverflow.com/questions/7342957/how-do-you-round-to-1-decimal-place-in-javascript#:~:text=if%20you%20want%20it%20to,to%20number%20format%20parseFloat(number.

function studentAverage() {
  // escreva seu código aqui
  return students.map((element, index) =>{
    return {
      name: element,
      average: grades[index].reduce((result, nota, _, array) => {
        let media = result += nota / array.length;
        return parseFloat(media.toFixed(1));
      }, 0),
    };
  });
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
