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

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const ulDays = document.querySelector('#days');
const buttonsContainer = document.querySelector('.buttons-container');
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysList(list) {
  for (let value of list) {
    let li = document.createElement('li');
    if (value === 24 || value === 31) {
      li.className = 'day holiday';
    } else if (value === 4 || value === 11 || value === 18) {
      li.className = 'day friday';
    } else if (value === 25) {
      li.className = 'day friday holiday';
    } else {
      li.className = 'day';
    }
    ulDays.appendChild(li).innerText = value;
  }
}

daysList(dezDaysList);

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function addButton(holiday) {
  let btn = document.createElement('button');
  btn.innerText = holiday;
  btn.setAttribute('id', 'btn-holiday');
  buttonsContainer.appendChild(btn);
}

addButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

const buttonHoliday = document.querySelector('#btn-holiday');

buttonHoliday.addEventListener('click', function () {
  let daysHoliday = document.querySelectorAll('.holiday');
  for (const day of daysHoliday) {
    let evento = day.style.background;
    switch (evento) {
      case 'green':
        day.setAttribute('style', 'background: rgb(238,238,238)');
        break;
    
      default:
        day.setAttribute('style', 'background: green');
        break;
    }
  }
  
});

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function addButtonFriday(friday) {
  let btn = document.createElement('button');
  btn.setAttribute('id', 'btn-friday');
  btn.innerText = friday;
  buttonsContainer.appendChild(btn);
}

addButtonFriday('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

const buttonFriday = document.querySelector('#btn-friday');

buttonFriday.addEventListener('click', function (event) {
  let daysFriday = document.querySelectorAll('.friday');
  let dayNumber = [];
  for (const day of daysFriday) {
    dayNumber.push(day.innerText);
    day.innerText = 'Sextouu!!!';
  }
  buttonFriday.addEventListener('click', function () {
    let cont = 0;
    for (const day of daysFriday) {
      day.innerText = dayNumber[cont];
      cont += 1;
    }
  });
});

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.


ulDays.addEventListener('mouseover', function (event) {
  let liDays = document.querySelectorAll('.day');
  for (const li of liDays) {
      event.target.setAttribute('style','font-size: 2rem');
  }
  ulDays.addEventListener('mouseout', function (event) {
    for (const li of liDays) {
      event.target.removeAttribute('style');
  }
  })
});

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

const divMyTask = document.querySelector('.my-tasks');

function addTask(task) {
  let elementTask = document.createElement('span');
  elementTask.innerText = task + '\n';
  divMyTask.appendChild(elementTask);
}
addTask('Projeto - Art Pixels');
// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function addLegend(text) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class','task');
  newDiv.setAttribute('style','background: ' + text);
  divMyTask.appendChild(newDiv);
}
addLegend('green');

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

const divsTask = document.getElementsByClassName('task');

// divsTask.addEventListener('click', function () {
//   for (const div of divsAll) {
//     div.setAttribute('class', 'task selected');
//   }
// });