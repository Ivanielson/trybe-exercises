import './node_modules/just-validate/dist/js/just-validate.js';

const selectEstado = document.querySelector('#select-estado');
const inputDate = document.querySelector('#input-date-start');
const divSelectResult = document.querySelector('.result-form');
const selectButton = document.querySelector('#submit');

const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
const siglas = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function generationSelect() {
  for (let index = 0; index < estados.length; index += 1) {
    const newOption = document.createElement('option');
    newOption.setAttribute('value', siglas[index]);
    newOption.innerText = estados[index];
    selectEstado.appendChild(newOption);
  }
}

let dataInit =  document.getElementById('input-date-start').DatePickerX.init();

window.onload = function () {
  generationSelect();

  new JustValidate('.my-form');
  // new JustValidate('.my-form', {
  //   rules: {
  //     name: {
  //       maxLength: 40,
  //       required: true
  //     },
  //     email: {
  //       maxLength: 50,
  //       email: true,
  //       required: true
  //     },
  //     cpf: {
  //       maxLength: 11,
  //       required: true
  //     },
  //     adress: {
  //       maxLength: 200,
  //       required: true
  //     },
  //     city: {
  //       maxLength: 28,
  //       required: true
  //     },
  //     state: {
  //       required: true
  //     },
  //     radio: {
  //       required: true
  //     },
  //     resume: {
  //       maxLength: 1000,
  //       required: true
  //     },
  //     cargo: {
  //       maxLength: 40,
  //       required: true
  //     },
  //     descriprion: {
  //       maxLength: 500,
  //       required: true
  //     },
  //     date: {
  //       required: true
  //     }
  //   },
  //   messages: {
  //     name: {
  //       maxLength: 'O limite é de 40 caracteres.',
  //       required: 'O campo Nome é obrigatório'
  //     },
  //     email: {
  //       maxLength: 'O limite é de 50 caracteres.',
  //       email: 'O email digitado não é válido',
  //       required: 'O campo E-mail é obrigatório'
  //     },
  //     cpf: {
  //       maxLength: 'O limite é de 11 caracteres.',
  //       required: 'O campo CPF é obrigatório'
  //     },
  //     adress: {
  //       maxLength: 'O limite é de 200 caracteres.',
  //       required: 'O campo Endereço é obrigatório'
  //     },
  //     city: {
  //       maxLength: 'O limite é de 28 caracteres.',
  //       required: 'O campo Cidade é obrigatório'
  //     },
  //     state: {
  //       required: 'O campo Estado é obrigatório'
  //     },
  //     radio: {
  //       required: 'Escolha uma das opções é obrigatório'
  //     },
  //     resume: {
  //       maxLength: 'O limite é de 1000 caracteres.',
  //       required: 'O campo Resumo do Currículo é obrigatório'
  //     },
  //     cargo: {
  //       maxLength: 'O limite é de 40 caracteres.',
  //       required: 'O campo Cargo é obrigatório'
  //     },
  //     description: {
  //       maxLength: 'O limite é de 500 caracteres.',
  //       required: 'O campo Descrição do cargo é obrigatório'
  //     },
  //     date: {
  //       required: 'O campo Data de inicío é obrigatório'
  //     },
  //   },
  //   submitHandler: function (form, value) {
  //     console.log(form, value);
  //   },
  // });
}

// function returnForm() {
//   const valueForm = [];
//   let nome = document.forms.curriculum.nome.value;
//   valueForm.push(nome);
//   let email = document.forms.curriculum.email.value;
//   valueForm.push(email);
//   let cpf = document.forms.curriculum.cpf.value;
//   valueForm.push(cpf);
//   let endereco = document.forms.curriculum.endereco.value;
//   valueForm.push(endereco);
//   let cidade = document.forms.curriculum.cidade.value;
//   valueForm.push(cidade);
//   let estado = document.forms.curriculum.estado.value;
//   valueForm.push(estado);
//   let moradia = document.forms.curriculum.moradia.value;
//   valueForm.push(moradia);
//   let resumo = document.forms.curriculum.curriculo.value;
//   valueForm.push(resumo);
//   let cargo = document.forms.curriculum.cargo.value;
//   valueForm.push(cargo);
//   let descriptionCargo = document.forms.curriculum.description.value;
//   valueForm.push(descriptionCargo);
//   let dateInicio = document.forms.curriculum.start.value;
//   valueForm.push(dateInicio);
//   return valueForm;
// }

// selectButton.addEventListener('click', function (event) {
//   event.preventDefault();  
//   const result = returnForm();
//   for (const value of result) {
//     const newParagraph = document.createElement('p');
//     newParagraph.innerText = value;
//     divSelectResult.appendChild(newParagraph);
//   }
  
// });
