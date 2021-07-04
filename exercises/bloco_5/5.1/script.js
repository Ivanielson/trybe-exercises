// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
function changeParagraph() {
  let text = "Eu me vejo daqui a 2 anos trabalhando em uma grande empresa na area de tecnologia, fazendo o que eu gosto, desenvolvendo sistemas para web."
  document.getElementsByTagName('p')[1].innerText = text;
}

//2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeColorBackground() {
  document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}

//3. Crie uma função que mude a cor do quadrado vermelho para branco.
function changeColorBackground2() {
  document.getElementsByClassName('center-content')[0].style.backgroundColor = '#fff';
}

//4. Crie uma função que corrija o texto da tag <h1>.
function alterText() {
  document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
}

// 5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function alterTextUpperCase() {
  let selection = document.getElementsByTagName('p');
  for (let index = 0; index < selection.length; index += 1) {
    selection[index].style.textTransform = 'uppercase';
  }
}

// 6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function exibtionContent(){
  let exibtion = document.getElementsByTagName('p');
  for (let index = 0; index < exibtion.length; index += 1) {
    console.log(exibtion[index].innerText);    
  }
}


changeParagraph();

changeColorBackground();

changeColorBackground2();

alterText();

alterTextUpperCase();

exibtionContent();