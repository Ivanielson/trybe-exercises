// 1 - Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1Prime = document.createElement('h1');
h1Prime.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1Prime);

// 2 - Adicione a tag div com a classe main-content como filho da tag body ;
let divPrime = document.createElement('div');
divPrime.className = 'main-content';
document.body.appendChild(divPrime);

// 3 - Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let divChild = document.createElement('div');
divChild.className = 'center-content';
document.querySelector('.main-content').appendChild(divChild);

// 4 - Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let newP = document.createElement('p');
newP.innerText = "Adicionando um parágrafo na tag DIV";
document.querySelector('.center-content').appendChild(newP);

// 5 - Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let divSecond = document.createElement('div');
divSecond.className = 'left-content';
document.querySelector('.main-content').appendChild(divSecond);

// 6 - Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let divThird = document.createElement('div');
divThird.className = 'right-content';
document.querySelector('.main-content').appendChild(divThird);

// 7 - Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let imgPrime = document.createElement('img');
imgPrime.className = 'small-image';
imgPrime.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(imgPrime);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let ulPrime = document.createElement('ul');
document.querySelector('.right-content').appendChild(ulPrime);
for (let index = 1; index < 11; index += 1) {
  let liPrime = document.createElement('li');
  liPrime.innerText = index;
  document.querySelector('.right-content ul').appendChild(liPrime);
}

// 9 - Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let numberTagsH3 = 3;
while (numberTagsH3 > 0) {
  let h3Child = document.createElement('h3');
  h3Child.innerText = "Tag 'H3' criada com sucesso!";
  document.querySelector('.main-content').appendChild(h3Child);
  numberTagsH3 -= 1;
}

// Exercícios parte II

// 1 - Adicione a classe title na tag h1 criada;
let tagH1 = document.body.querySelector('h1');
tagH1.className = 'title';

// 2 - Adicione a classe description nas 3 tags h3 criadas;
let tagsH3Selection = document.querySelectorAll('.main-content h3');
for (let index = 0; index < tagsH3Selection.length; index += 1) {
  tagsH3Selection[index].className = 'description';  
}

// 3 - Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
let divSlectionFather = document.querySelector('.left-content').parentElement;
let divSelection =  document.querySelector('.left-content');
divSlectionFather.removeChild(divSelection);

// 4 - Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
document.querySelector('.right-content').style.margin = 'auto';

// 5 - Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
document.querySelector('.center-content').parentElement.style.backgroundColor = 'green';

// 6 - Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
let lis = document.querySelectorAll('li');
for (let li of lis) {
  if(li.innerText === '9' || li.innerText === '10'){
    li.parentElement.removeChild(li);
  }
}
