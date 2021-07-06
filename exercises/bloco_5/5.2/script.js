// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1Prime = document.createElement('h1');
let addText = h1Prime.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Prime);

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let divPrime = document.createElement('div');
let divClass = divPrime.className = 'main-content';
document.body.appendChild(divPrime);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divChild = document.createElement('div');
let divClassChild = divChild.className = 'center-content';
document.querySelector('.main-content').appendChild(divChild);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let newP = document.createElement('p');
let pText = newP.innerText = "Adicionando um parágrafo na tag DIV";
document.querySelector('.center-content').appendChild(newP);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divSecond = document.createElement('div');
let divClassSecond = divSecond.className = 'left-content';
document.querySelector('.main-content').appendChild(divSecond);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divThird = document.createElement('div');
let divClassThird = divThird.className = 'right-content';
document.querySelector('.main-content').appendChild(divThird);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imgPrime = document.createElement('img');
let imgClassPrime = imgPrime.className = 'small-image';
let imgSrcPrime = imgPrime.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(imgPrime);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ulPrime = document.createElement('ul');
document.querySelector('.right-content').appendChild(ulPrime);
for (let index = 1; index < 11; index += 1) {
  let liPrime = document.createElement('li');
  let liValue = liPrime.innerText = index;
  document.querySelector('.right-content ul').appendChild(liPrime);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.