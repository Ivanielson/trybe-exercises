function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const ulDays = document.querySelector('#days');
const buttonsContainer = document.querySelector('.buttons-container');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysList(list) {
  for (let value of list) {
    let li = document.createElement('li');
    if (value === 24 || value === 31) {
      li.className = 'day holiday';
    }else if (value === 4 || value === 11 || value === 18) {
      li.className = 'day friday';
    }else if (value === 25) {
      li.className = 'day friday holiday';
    }else {
      li.className = 'day';
    }
    ulDays.appendChild(li).innerText = value;
  }
}


function addButton(feriados) {
  let btn = document.createElement('button');
  btn.innerText = 'Feriados';
  btn.setAttribute('name',feriados);
  btn.setAttribute('id', 'btn-holiday');
  buttonsContainer.appendChild(btn);
}
daysList(dezDaysList);

addButton('Feriados');

const buttonFeriados = document.querySelector('#btn-holiday');

buttonFeriados.addEventListener('click', function (event) {
  let daysHoliday = document.querySelectorAll('.holiday');
  for (const day of daysHoliday) {
    day.setAttribute('style', 'background: green');
  }
  
  buttonFeriados.addEventListener('click', function () {
    let daysHoliday = document.querySelectorAll('.holiday');
    for (const day of daysHoliday) {
      day.setAttribute('style', 'background: rgb(238,238,238)');
    }
  });
});


