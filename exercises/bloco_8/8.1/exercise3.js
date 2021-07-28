const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkTemplate = (list, listStudent) => {
  let count = 0;
  for (let index = 0; index < listStudent.length; index += 1) {
    if (list[index] === listStudent[index]) {
      count += 1;
    } if (list[index] !== listStudent[index] && listStudent[index] !== 'N.A') {
      count -= 0.5;
    }
  }
  return count;
}

const evaluationResult = (template, templateStudent, func) => func(template, templateStudent);

console.log(evaluationResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkTemplate));